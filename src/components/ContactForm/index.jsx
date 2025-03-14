/* eslint-disable @next/next/no-img-element */
'use strict'
import React, {useRef, useState} from "react";
import { Button, styled} from "@mui/material";
import * as yup from "yup";
import { useFormik  } from "formik";
import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { initializeApp, app } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "@/hooks/use-firebase-data";



 
    const SendButton = styled(Button)(({ theme }) => ({
      color: "white",
      backgroundColor: "#2F2F2F",
      "&:hover": {
        backgroundColor: "#2F2F2F",
      },
      borderRadius: "25px",
      width: "auto",
      fontSize: "18px",
      fontWeight: "400",
      padding: "4px 24px",
    }));
  
    // const BlackTextField = styled(TextField)({
    //   "& label.Mui-focused": {
    //     color: "#79747E",
    //   },
    //   "& .MuiInput-underline:after": {
    //     borderBottomColor: "#79747E",
    //   },
    //   "& .MuiOutlinedInput-root": {
    //     "& fieldset": {
    //       borderColor: "#79747E",
    //     },
    //   },
    // });
  
    
    const StyledErrorTypo = styled(Typography)(({theme}) => ({
      color: theme.palette.primary.dark,
      fontSize: '12px',
      margin: 0,
      padding: 0,
      marginTop: '-4px',
      marginBottom: '-4px',
      marginLeft: '8px'
    }));
  
    const CvButton = styled(Button)(({ theme }) => ({
      color: "black",
      borderColor: "#333333",
      borderRadius: "8px",
      width: "auto",
      fontSize: "14px",
      fontWeight: "400",
      padding: "6px 12px",
    }));

const ContactForm = ({ titulo, sending, textButton, submitAction }) => {
  const [sendingEmail, setSendingEmail ] = useState(false)
  const [ selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile ] = useState('');
  

  // const handleUploadURLImage = async (file) => {
  //   if(!selectedImage) return;
  //   const formData = new FormData();
  
  //   formData.append('file', file);
  //   formData.append('upload_preset', 'uploads-from-web-pierre')
  //   const data = await fetch('https://api.cloudinary.com/v1_1/dc3kzic4m/image/upload', {
  //     method: 'POST',
  //     body: formData
  //   }).then( r => r.json());

  //   console.log('Response upload Image', data)
  //   return data.url
  // };

  // const handleUploadPublicRepo = async (file) => {
  //   // ESTA FUNCION SUBE ARCHIVOS A PUBLIC REPOSITORY
  //   try {
  //     if(!selectedImage) return;
  //     const formData = new FormData();
  //     formData.append('myImage', file)
  //     const {data} = await axios.post('/api/image', formData);
  //     console.log('Response upload Image PUBLIC', data)
  //     return data.url
  //   } catch (error) {
  //     console.log('error upload image public', error.response?.data)
  //   }
  // };
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];

  const validationSchema = yup.object().shape({
    name: yup.string().min(6, 'Muy corto!').max(30, 'Muy Largo!').required("Campo requerido"),
    email: yup.string().email("Coreo Inválido").required('Campo requerido'),
    course: yup.string().required("Curso Inválido"),
    phone: yup.string().min(2, 'Colocar entre 10 y 13 números').max(30, 'Colocar entre 10 y 13 números').required("Campo requerido"),
    message: yup.string().min(5, 'Colocar un mensaje con mínimo 20 caracteres').max(500, 'Colocar un mensaje con minimo 20 caracteres').required("Campo requerido"),
    attachments:  yup.mixed().required('Colocar archivo a enviar.').nullable()
      .test(
      "fileSize", 
      "Debes adjuntar un archivo con formato .png, .jpeg o .pdf con tamaño máximo de 6mb",
      (file) => {
        if (file) {
          return file.size <= 6100000;
        } else {
          return true;
        }})
      .test(
        'format',
        'Debes adjuntar un archivo con formato .png, .jpeg o .pdf ', 
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))),
      
  });
      
      
  const initialValues = {
    name: "",
    email: "",
    course: "",
    phone: "",
    message: "",
    URLImageUploaded: "",
    attachments: [
      {
        content: '',
        filename: "",
        type: "",
        disposition: "attachment"
      }
    ]
  };

  // const convertFileToBase64 = (file) => {
  //   // const attachment = URL.createObjectURL(file);
  //   // const bitmap = new Buffer.from(attachment);
  //   const bitmap = new Buffer.from(file);
  //   const base64file = bitmap.toString('base64')
  //   return base64file
  // };


  
  // upload file to firebase storage, getDownloadUrl and send message
  const  uploadImageFirebaseAndSendMessage = (file, fields, setValuesFunction, setSubmitting) => {
        setSendingEmail(true);
        const app = initializeApp(firebaseConfig);
        const storage = getStorage();
        // /** @type {any} */
        const metadata = {
          contentType: file.type
        };

        const storageRef = ref(storage, 'images/' + file.name );
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          },
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;

              // ...

              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          },


          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              const payload = {...fields, URLImageUploaded: downloadURL };
              setValuesFunction(payload);   
              console.log('payload sended', payload)
              submitAction(payload);
              setSendingEmail(false);
              setSubmitting(false);
              resetForm();
              return downloadURL
            });
          },

        );

  }

  const { values, handleChange, handleSubmit, isValid, setFieldValue, errors, resetForm } =

  useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    validateOnMount: false,
    onSubmit:  (fields , {setSubmitting, setValues}) => {
        uploadImageFirebaseAndSendMessage(fields.attachments, fields, setValues, setSubmitting)
      },
    });

  const fileRef = useRef();
  return (
    <Box>
        <Typography
          sx={{ fontWeight: "600", fontSize: "26px", margin: "10px 0", display: {xs: 'block', sm: 'none'} }}>
          {titulo}
        </Typography>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          >
         <Box
            sx={{
              gap: 2,
              width: '100%'
            }}>
            <FormControl
              sx={{
                flexGrow: 1, width: '100%'
              }}>
              <TextField
                name="name"
                onChange={handleChange}
                value={values.name}
                required 
                placeholder={"Nombre y Apellido"}
                error={!!errors.name}
                id="name"
                label="Nombre y Apellido"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "#79747E",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#79747E",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#79747E",
                    },
                  },
                  '& .MuiOutlinedInput-root.Mui-error' :{
                    borderColor: 'green'
                  },
                  mb: 1
                }}
                variant="outlined"
              />
            </FormControl>
            {errors?.name ?
              <StyledErrorTypo sx={{visibility: errors.name ? 'visible' : 'hidden'}}  variant='subtitle2'>{errors?.name}</StyledErrorTypo>   
              : <StyledErrorTypo sx={{visibility: 'hidden'}}>Pierre cursos test</StyledErrorTypo>
            }
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}>
            <FormControl
              sx={{
                flexGrow: 1,
              }}>
                <>
              
                  
                <TextField
                  id="email"
                  onChange={handleChange}
                  name="email"
                  required
                  value={values.email}
                  error={!!errors.email}
                  label="Correo electrónico"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    "& label.Mui-focused": {
                      color: "#79747E",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#79747E",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#79747E",
                      },
                    },
                    mb: 1

                  }}
                  variant="outlined"
                />
                {errors?.email ?
                <StyledErrorTypo sx={{visibility: errors.email ? 'visible' : 'hidden'}}  variant='subtitle2'>{errors?.email}</StyledErrorTypo>   
                : <StyledErrorTypo sx={{visibility: 'hidden'}}>Pierre cursos test</StyledErrorTypo>
              }
              </>
              </FormControl>
              
            <FormControl
              sx={{
                flexGrow: 1,
              }}>
                <>
              <TextField
                id="phone"
                label="Teléfono/Cel"
                onChange={handleChange}
                name="phone"
                required
                value={values.phone}
                error={!!errors.phone}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                sx={{
                  "& label.Mui-focused": {
                    color: "#79747E",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#79747E",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#79747E",
                    },
                  },
                  mb: 1

                }}
              />
              {errors?.phone ?
              <StyledErrorTypo sx={{visibility: errors.phone ? 'visible' : 'hidden'}}  variant='subtitle2'>{errors?.phone}</StyledErrorTypo>   
              : <StyledErrorTypo sx={{visibility: 'hidden'}}>Pierre cursos test</StyledErrorTypo>
            }
            </>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}>
            <FormControl
              sx={{
                flexGrow: 1,
              }}>
                <>
              <TextField
                id="course"
                onChange={handleChange}
                name="course"
                required
                value={values.course}
                error={!!errors.course}
                label="Curso de interés"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  "& label.Mui-focused": {
                    color: "#79747E",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#79747E",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#79747E",
                    },
                  },
                  mb: 1

                }}
                variant="outlined"
              />
              {errors?.course ?
                <StyledErrorTypo sx={{visibility: errors.course ? 'visible' : 'hidden'}}  variant='subtitle2'>{errors?.course}</StyledErrorTypo>   
              : <StyledErrorTypo sx={{visibility: 'hidden'}}>Pierre cursos test</StyledErrorTypo>
              }
            </>
            </FormControl>
            
          </Box>
           
          <FormControl>
            <>
            <TextField
              id="message"
              label="Deja tu consulta" 
              onChange={handleChange}
              name="message"
              required
              value={values.message}
              error={!!errors.message}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              sx={{

                mb: 1

              }}
              multiline
              rows={7}
            />
            {errors?.message ?
                <StyledErrorTypo sx={{visibility: errors.message ? 'visible' : 'hidden'}}  variant='subtitle2'>{errors?.message}</StyledErrorTypo>   
              : 
                <StyledErrorTypo sx={{visibility: 'hidden'}}>Pierre cursos test</StyledErrorTypo>
              }
            </>
          </FormControl>  
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
            <Box sx={{display: 'flex', alignItems: {xs: 'flex-start', sm: 'end'}, justifyContent: 'flex-start', flexDirection: {xs: 'column', sm: 'row'}}}>
              <>
                <CvButton component='label'  variant="outlined" startIcon={<AttachFileIcon />}  >
                <label htmlFor={'attachments'} style={{cursor:'pointer'}}>

                  <input
                    id="attachments"
                    onChange={(target) => {
                      if(target.target.files[0]){
                        setFieldValue("attachments", target.target.files[0])
                        const file =  target.target.files[0];
                        setSelectedImage(URL.createObjectURL(file))
                        setSelectedFile(file)
                      }
                    }}
                    ref={fileRef}
                    name="attachments"
                    type="file"
                    hidden
                  />
                    {'Adjuntar Doc'}
                </label>
                  </CvButton>
                  {values?.attachments.name && <Typography sx={{fontSize: '12px', ml:2}}>{values?.attachments.name}</Typography> }
                    <StyledErrorTypo sx={{visibility: errors?.attachments ? 'visible' : 'hidden', ml: 2, maxWidth: '50%'}}  variant='subtitle2'>{errors?.attachments}</StyledErrorTypo>   
              </>
            </Box>
            <Box>
              <SendButton variant="contained" type="submit" disabled={!isValid}>{ sendingEmail ? 'Enviando...' : textButton }</SendButton>
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default ContactForm;


// function submitAction(fields: ContactFormFields) {
//   throw new Error("Function not implemented.");
// }

