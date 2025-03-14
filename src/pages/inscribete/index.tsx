import { useTheme } from "@mui/material/styles";
import { Box, Typography, styled, useMediaQuery } from "@mui/material";
import PageContainer from "@/components/PageContainer";
import React from "react";
import Link from "next/link";
import Contact from "@/components/Contact";


export const StyledWspAnchor = styled(Link)(() => ({
  color: '#25d567',
  '&:hover': {
    color: '#189448',
  }
}))

const Inscribete = () => {
  
  const BgImage = styled("img")(({ theme }) => ({
    position: "fixed",
    zIndex: -1,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  })); 
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer title={"Contactate"}>
      <BgImage
        src={"/inscribete1.png"}
        height="auto"
        width="auto"
        alt="alt1"
        loading="lazy"
        sx={{
          height: { xs: "100%", sm: "100%" },
          width: { xs: "auto", sm: "100%" },
          //   minWidth: { xs: "100%" },
        }}
      />

      {matchDownMd ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "5rem",
            flexDirection: "column",
          }}>
          <Typography
            sx={{
              fontSize: 28,
              fontWeight: "400",
              color: "white",
              marginBottom: "28px",
            }}>
            Inscribete
          </Typography>
          <Typography
            align="center"
            sx={{
              fontSize: 18,
              fontWeight: "200",
              color: "white",
              margin: "0 16px 28px 16px",
            }}>
              Estás a solo tres pasos de ser parte de la experiencia Pierre.
          </Typography>
          <Box sx={{ display: { xs:'block', sm: 'none'}, width: '80%', margin: 'auto' }}>
                <ol style={{ fontWeight: 'bold', color: 'white'}}>
                  <li style={{color: 'white' ,fontWeight: 'bold'}} >Pide tu link pagó por este link de <StyledWspAnchor href="https://api.whatsapp.com/send/?phone=5493884778611&text&type=phone_number&app_absent=0" target='_blank'> whatsapp </StyledWspAnchor></li>
                  <li style={{color: 'white',fontWeight: 'bold'}}>Rellena el formulario con tus datos y sube el comprobante </li>
                  <li style={{color: 'white',fontWeight: 'bold'}}>Aguarda ¡Nos comunicaremos en breve para darte la bienvenida!</li>
                </ol>
              </Box>
        </Box>
      ) : null}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: { xs: "100px 10px", sm: "200px 30px" },
        }}>
        <Box
          sx={{
            backgroundColor: "white",
            display: { xs: "block", sm: "flex" },
            padding: { xs: "10px", sm: "30px" },
            margin: { xs: "0 16px", sm: "0" },
            borderRadius: { xs: "8px", sm: "30px" },
            maxWidth: "1200px",
            width: { xs: "100%", sm: "auto" },
            gap: "30px",
            paddingBottom: '0px'

          }}>
          {!matchDownMd ? (
            <Box sx={{ flex: "33%",  }}>
              <Typography
                align="left"
                sx={{
                  fontSize: 48,
                  fontWeight: "600",
                  color: "black",
                }}>
                Inscribete
              </Typography>
              <Typography
                sx={{
                  fontSize: 24,
                  fontWeight: "300",
                  color: "black",
                }}>
                Estás a solo tres pasos de ser parte de la experiencia Pierre.
              </Typography>
              <Box sx={{ display: { xs:'none', sm: 'block'} }}>
                <ol style={{ paddingLeft: '24px', marginRight: '16px', fontWeight: 'bold'}}>
                  <li>Pide tu link pagó por este link de <StyledWspAnchor href="https://api.whatsapp.com/send/?phone=5493884778611&text&type=phone_number&app_absent=0" target='_blank'> whatsapp </StyledWspAnchor></li>
                  <li>Rellena el formulario con tus datos y sube el comprobante </li>
                  <li>Aguarda ¡Nos comunicaremos en breve para darte la bienvenida!</li>
                </ol>
              </Box>
              
            </Box>
          ) : null}
          <Box sx={{ flex: { xs: "100%", sm: "66%" }, width: "100%" }}>
            {/* <ContactForm sending={false} titulo="Formulario" textButton={'Inscribete'} /> */}
            <Contact  />
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Inscribete;
