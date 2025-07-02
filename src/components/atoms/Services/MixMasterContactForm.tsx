/* eslint-disable @next/next/no-img-element */
'use strict'
import React, {useState} from "react";
import { Button, styled} from "@mui/material";
import * as yup from "yup";
import { useFormik  } from "formik";
import { Box, Typography } from "@mui/material";
import InputForm from "../Common/Form/InputForm";

interface FormValues {
  name: string;
  email: string;
  link: string;
  option: string;
  engineer: string;
  message: string;
}
const MixMasterContactForm = ({submitAction} : {submitAction: (data : FormValues) => void}) => {
  const [sendingEmail, setSendingEmail ] = useState(false)

  const validationSchema = yup.object().shape({
    name: yup.string().min(6, 'Muy corto!').max(30, 'Muy Largo!').required("Campo requerido"),
    email: yup.string().email("Coreo Inválido").required('Campo requerido'),
    link: yup.string().required('Campo requerido'),
    option: yup.string().required("Campo requerido"),
    engineer: yup.string().required("Campo requerido"),
    message: yup.string().min(5, 'Colocar un mensaje con mínimo 20 caracteres').max(500, 'Colocar un mensaje con mínimo 20 caracteres').required("Campo requerido"),
  });
      
      
  const initialValues = {
    name: "",
    email: "",
    link: "",
    option: "",
    engineer: "", 
    message: "",
  };


  const  sendMessageEmail = (fields: FormValues) => {
        setSendingEmail(true);
        try {
          submitAction(fields);
          setSendingEmail(false);
          //  setSubmitting(false);
          resetForm();

        } catch (error) {
          console.error('Error al enviar el mensaje', error);
          setSendingEmail(false);
          // setSubmitting(false);
        }

  }

  const { values, handleChange, handleSubmit, isValid, setFieldValue, errors, resetForm } =
  useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    validateOnMount: false,
    onSubmit:  (fields , {setSubmitting}) => {
        sendMessageEmail(fields) //fields, setSubmitting
      },
    });

  return (
    <Box sx={{mb: 4}}>
        <Typography
          sx={{ fontWeight: "600", fontSize: "46px", margin: "10px 0", display: {xs: 'block'}, textAlign: 'center', mb: 4, paddingInline: {xs: 2, md: 0} }}>
          Envía tus stems aquí  
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

          <InputForm value={values.name} name={'name'} placeholder="Nombre y Apellido" error={!!errors.name} handleChange={handleChange} />
          <InputForm value={values.email} name={'email'} placeholder="Email" error={!!errors.email} handleChange={handleChange} />
          <InputForm value={values.link}  name={'link'} placeholder="Link" error={!!errors.link} handleChange={handleChange} />
          <InputForm type={'select'} options={['Mixdown', 'Mixdown & Mastering', 'Mastering']} value={values.option}  name={'option'} placeholder="Selecciona una opción" error={!!errors.option} handleChange={handleChange} />
          <InputForm type={'select'} options={['Tao', 'Blue Phoenix', 'Nicolas Bava', 'Cualquier']} value={values.engineer}  name={'engineer'} placeholder="Selecciona un ingeniero" error={!!errors.engineer} handleChange={handleChange} />
          <InputForm type={'textarea'} value={values.message}  name={'message'} placeholder="Dejanos un mensaje" error={!!errors.message} handleChange={handleChange} />

          <Button variant='outlined' sx={{py: 1, borderColor: 'white', color: 'white'}} type='submit'>ENVIAR</Button>
          
        </Box>
    </Box>
  );
};

export default MixMasterContactForm;