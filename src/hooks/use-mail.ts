import { ApiMailUp } from "@/types/api";

export type ContactMailUp = {
  name: string;
  email: string;
  link: string;
  option: string;
  engineer: string;
  message: string;
};

type UseMailHook = {
  sendContactMail: (data: ContactMailUp) => Promise<void>;
};

const useMail = (): UseMailHook => {
  const sendContactMail = (data: ContactMailUp) => {
    return new Promise<void>((resolve, reject) => {


      const message = {
        to: 'nicolasbava96@gmail.com', // Change to your recipient
        // to: 'nicobava96@gmail.com', // Change to your recipient
        from: 'nicobava96@gmail.com', // Change to your verified sender
        html: `<div>
        <h3>Nuevo mensaje desde la web, servicio de Mix y Master</h3>
        <h2>Nombre: ${data.name}</h2>
        <h2>Email: ${data.email}</h2>
        <h4>Stems link: <a href="${data.link}">${data.link}</a></h4>
        <h4>Opción de trabajo: ${data.option}</h4>
        <h4>Ingeniero elegido: ${data.engineer}</h4>
        <p>Mensaje: ${data.message}</p>
        </div>`,
      }

      const mailMsg: ApiMailUp = {
        subject: `[${data.name}] NUEVO MENSAJE - MezclaMasterForm!`,
        html: message.html,
      };


      fetch("/api/mail", {
        body: JSON.stringify(mailMsg),
        method: "POST",
      }).then(async (r) => {
          if (r.status === 200) {
            console.log('Mensaje enviado correctamente')
            resolve();
          } else {
            console.log('Error al enviar mensaje')

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
