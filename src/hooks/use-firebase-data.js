/* eslint-disable react-hooks/exhaustive-deps */
// Import the functions you need from the SDKs you need
import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
// import { EventsArrayProps } from '@/types/events';

import {
  fetchAndActivate,
  getRemoteConfig,
  getAll,
  getValue,
} from 'firebase/remote-config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBNAucTTn34rlqj2EIAagA5rlvWI32GRlM",
//   authDomain: "pierre-cursos.firebaseapp.com",
//   databaseURL: "https://pierre-cursos-default-rtdb.firebaseio.com",
//   projectId: "pierre-cursos",
//   storageBucket: "pierre-cursos.appspot.com",
//   messagingSenderId: "942797636838",
//   appId: "1:942797636838:web:0c2b5088b65fb0636ea727",
//   measurementId: "G-6SGM682TQE"
// };

export const firebaseConfig = {
  apiKey: "AIzaSyAgfXTlRiON1AVfuNOoECfjssl34LKO7B0",
  authDomain: "pierre-cursos-be59f.firebaseapp.com",
  projectId: "pierre-cursos-be59f",
  storageBucket: "pierre-cursos-be59f.appspot.com",
  messagingSenderId: "504298683090",
  appId: "1:504298683090:web:d9f9030db77ef074a98b0b",
  measurementId: "G-LWMBXQHZJR"
};



export const useFirebaseData = () => {
    const [ cursosData, setCursosData ] = useState(null)
    const [ eventosData, setEventosData ] = useState(null)
    // const analytics = getAnalytics(app);
    const app = initializeApp(firebaseConfig);
    React.useEffect(() => {
      
      
      
      if (typeof window !== 'undefined') {
      const remoteConfig = getRemoteConfig(app);
        remoteConfig.settings.minimumFetchIntervalMillis = 360;
  
        fetchAndActivate(remoteConfig)
          .then(() => {
            const data = getAll(remoteConfig);

            if(typeof data != 'undefined'){
              const cursos= data.cursos;
              const eventos= data.eventos;
              setCursosData(cursos);
              setEventosData(eventos);
              console.log('data', data)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }  
    }, []);


    return { cursosData, eventosData }
}


  // upload file to firebase storage, getDownloadUrl and send message
  const  uploadImageFirebase = (file, fields, setValuesFunction, setSubmitting, submitAction) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore();
    const storage = getStorage();


    const URLFinal = []

        // Create the file metadata
        // /** @type {any} */
        const metadata = {
          contentType: file.type
        };

        
        // Upload file and metadata to the object 'images/mountains.jpg'
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
              setUploading(false);
              setSubmitting(false);
              resetForm();
              return downloadURL
            });
          },

        );

  }
