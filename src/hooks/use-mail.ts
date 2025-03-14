import { ApiMailUp } from "@/types/api";

export type ContactMailUp = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  attachments: File;
  URLImageUploaded: string
};

type UseMailHook = {
  sendContactMail: (data: ContactMailUp) => Promise<void>;
};

// const convertFileToBase64 = (file:File): string => {
  const convertFileToBase64 = (file: File) => {
    const attachment = URL.createObjectURL(file);
    const bitmap = Buffer.from(attachment);
    const base64file = bitmap.toString('base64')
    return base64file
  };

  // const convertFileToBlob = (file:File): string => {


const useMail = (): UseMailHook => {
  const sendContactMail = (data: ContactMailUp) => {
    console.log('dataUSEMAIL', data)
    return new Promise<void>((resolve, reject) => {


      const message = {
        to: 'cursospierre623@gmail.com', // Change to your recipient
        // to: 'nicobava96@gmail.com', // Change to your recipient
        from: 'cursospierre623@gmail.com', // Change to your verified sender
        subject: 'Mensaje enviado desde Web Centro Pierre',
        text: data.message,
        name: data.name,
        course: data.course,
        attachments: data.attachments,
        html: `<div>
        <h1>Nombre: ${data.name}</h1>
        <h2>Curso: ${data.course}</h2>
        <p>Email: ${data.email}</p>
        <p>Teléfono: ${data.phone}</p>
        <p>URL ADJUNTO: ${data.URLImageUploaded} <p>
        <p>Mensaje: ${data.message}</p>
        </div>`,
      }

      const mailMsg: ApiMailUp = {
        subject: `[${data.name}] Pierre Nuevo mensaje!`,
        body: message.html,
        attachments: data.attachments
        // body: `<p style="text-align: justify;"> El siguiente usuario ha enviado un mensaje desde el sitio de Pierre Cursos:
        //                 <br />
        //                 <br />
        //                  <ul style="text-align: left;">
        //                    <li>Nombre: <strong>${data.name}</strong></li>
                                       
        //                  </ul>
        //                  <br />
        //                  <p style="text-align: justify;"><strong>Mensaje:</strong> <br /></p>                         
        //                  <p style="text-align: justify;">${data.message}</p>                         
        //            </p>`,
      };

      console.log('mailMsg', mailMsg)

      fetch("/api/mail", {
        body: JSON.stringify(mailMsg),
        method: "POST",
      }).then(async (r) => {
          if (r.status === 200) {
            console.log('R EXITO MENSAJE ENVIADO (?', r)
            resolve();
          } else {
            console.log('R ERROR MENSAJE NO ENVIADO')

            reject(new Error(`${r.status}: ${await r.json()}`));
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

 

  return {
    sendContactMail,
  };
};

export default useMail;
