import React, { forwardRef } from "react";
import Grid, { GridProps } from "@mui/material/Grid";
import useMail, { ContactMailUp } from "@/hooks/use-mail";
import ContactForm from "@/components/ContactForm";
import { Box, styled, Typography, Stack } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import { toast } from "react-toastify";
import { text } from "stream/consumers";
// import StyledTitleElement from "../StyledTitleElement";

const ImageElement = styled("img")(() => ({
  margin: "auto",
  maxWidth: "37vw",
}));

const ContactContainer = styled(Box)<BoxProps>(() => ({ 
  "&.MuiBox-root": {
    background: "#F5F5F5",
    paddingBottom: "10vh",
    paddingTop: "7vh",
    margin: "auto",
    paddingInline: "5vw",
  },
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  "&": {
    color: theme.palette.secondary,
    marginBlock: "5vh",
  },
}));


interface contactProps {
  textBoolean?: boolean;
}

const Contact = (  {textBoolean = false} ) => {
  const { sendContactMail } = useMail();
  const [sending, setSending] = React.useState<boolean>(false);



  const handleSend = ({ name, phone, course, message, email, attachments, URLImageUploaded } : ContactMailUp) => {
    setSending(true);
    sendContactMail({
      name,
      email,
      phone,
      course,
      message,
      attachments,
      URLImageUploaded
    })
      .then(() => {
        setSending(false);
        toast.success(`Email enviado correctamente!`);
      })
      .catch((err) => {
        console.log('error send email', err)
        toast.error(`Lo sentimos, no pudimos enviar su email`);
        setSending(false);
      });
  };

  return (
        <ContactForm
          sending={sending}
          titulo={'Contacto'}
          submitAction={handleSend}
          textButton={!textBoolean ? 'Inscribete' : 'Enviar'}
          // formId={formId}
          />
  );
};

export default Contact
