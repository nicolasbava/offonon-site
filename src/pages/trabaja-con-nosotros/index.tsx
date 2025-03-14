import { BgImage, StyledTitle } from "@/components/Hero";
import PageContainer from "@/components/PageContainer";
import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
// import WorkForm from "@/components/WorkForm";
import ContactForm from "@/components/ContactForm";
import  Contact  from "@/components/Contact";


const itemData = [
  {
    title: "Administrativo Junior",
  },
  {
    title: "Profesional Capacitador en Manicura",
  },
  {
    title: "Profesional Capacitador en Lashita",
  },
  {
    title:
      "Profesional Capacitador en Diseño de Moda e Indumentaria / Confección",
  },
  {
    title: "Profesional Capacitador en Reparación de Celulares",
  },
  {
    title: "Profesional Capacitador en Electricidad",
  },
  {
    title: "Profesional Capacitador en Serigrafía",
  },
  {
    title: "Profesional Capacitador en Reparación de PC",
  },
  {
    title:
      "Profesional Capacitador en Operador Informático para Administración y Gestión",
  },
  {
    title: "Profesional Capacitador en Fotografía",
  },
  {
    title: "Profesional Capacitador en Marketing Digital",
  },
  {
    title: "Profesional Capacitador en Barbería",
  },
  {
    title: "Profesional Capacitador en Peluquería",
  },
  {
    title: "Profesional Capacitador en Depilación",
  },
  {
    title: "Profesional Capacitador en Cosmetología",
  },
  {
    title: "Limpieza",
  },
  {
    title: "Asesor/a Digital",
  },
];
const WorkWithUs = () => {
  return (
    <PageContainer title={"Trabajá con Nosotros"}>
      <BgImage
        src={"/bg2.png"}
        height="auto"
        width="auto"
        alt="alt1"
        loading="lazy"
        sx={{height: '250vh', objectFit: 'cover'}}
      />

        {/* // MOBILE VERSION */}
        <Box
          sx={{
            marginTop: "5rem",
            paddingInline: '16px',
            paddingLeft: {xs: 2, sm: '3vw', md: '5vw'}
          }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "28px",
              fontWeight: 500,
              lineHeight: "28px",
              textAlign: "left",
              paddingBottom: '8px'
            }}>
              Oferta laboral
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "24px",
              fontWeight: 600,
              lineHeight: "1.2",
              textAlign: "left",
              paddingBottom: '32px'
            }}>
              ¿Te gustaría formar parte de nuestro equipo de profesionales?
          </Typography>
          {/* <Typography
            sx={{
              color: "white",
              marginBottom: "28px",
              fontSize: "18px",
              fontWeight: 400,
              textAlign: "left",
              paddingBottom: '32px',
              maxWidth: {xs: 'auto', sm: '80%', md: '60%'}
            }}>
              Bienvenido a nuestra sección de búsqueda de talentos en Centro Profesional Pierre. En este momento estamos incorporando personas talentosas y comprometidas para unirse a nuestro equipo en diferentes áreas, como enseñanza, asesoramiento, ordenanzas, investigación y administración. Ofrecemos un excelente ámbito laboral
          </Typography> */}
        </Box>

            {/* DESKTOP */}
        {/* <Box>
          <Box
            sx={{ marginBottom: "20vh", marginTop: "39vh", marginLeft: "7vw" }}>
            <StyledTitle sx={{ fontSize: 82 }}>
              Trabajá con Nosotros
            </StyledTitle>
          </Box>
        </Box> */}


      <Box sx={{margin:'auto'}}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginLeft: "16px",
            gap: "10px",
            overflowX: "auto",
            marginBottom: "20px",
            flexWrap:{xs: 'nowrap', md: 'wrap'},
            justifyContent: 'flex-start',
            paddingRight: '32px',
            '&::-webkit-scrollbar-track':{
              background: 'transparent'
            }
          }}>
          {itemData.map((item, index) => (
            <Box
              key={index}
              sx={{
                background:
                  "linear-gradient(118.7deg, rgba(255, 255, 255, 0.4) 27.4%, rgba(255, 255, 255, 0.1) 71.52%)",

                backdropFilter: "blur(40px)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 24px -1px",
                border: "0.8px solid",
                borderRadius: "8px",
                borderImageSource:
                  "linear-gradient(102.13deg, rgba(255, 255, 255, 0.51) 18.6%, rgba(179, 143, 193, 0.76) 39.08%, rgba(140, 88, 160, 0.77) 61.66%, rgba(114, 46, 140, 0.5) 80.57%)",
                height: "85px",
                minWidth: "250px",
                paddingLeft: "8px",
                paddingTop: "10px",
                marginBottom: "10px",
                maxWidth: '250px',
                maxHeight: '80px'
              }}>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWight: 500,
                  lineHeight: "18px",
                  letterSpacing: "0.01em",
                  textAlign: "left",
                }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          position: "relative",
          justifyContent: "center",
          paddingBottom: '16px'
        }}>
        <Box
          sx={{
            background: "linear-gradient(to top, rgb(102, 36, 134), rgb(46, 10, 64))",
            position: "absolute",
            zIndex: "-1",
            bottom: 0,
            left: 0,
            height: "95%",
            width: "100vw",
            display: { xs: "none", sm: "inline" },
          }}>
            
          </Box>
        <Box
          sx={{
            display: "flex",
            padding: { xs: "20px 16px 16px 20px", sm: "0 10px 72px 10px" },
            gap: "10px",
            maxWidth: "1200px",
            width: { xs: "100%", sm: "auto" },
          }}>
          <Box
            sx={{
              flex: "50%",
              marginTop: "5%",
              color: "white",
              fontSize: "26px",
              display: { xs: "none", sm: "inline" },
              paddingRight: '3vw'
            }}>
              Bienvenido a nuestra sección de búsqueda de talentos en Centro Profesional Pierre. En este momento estamos incorporando personas talentosas y comprometidas para unirse a nuestro equipo en diferentes áreas, como enseñanza, asesoramiento, ordenanzas, investigación y administración. Ofrecemos un excelente ámbito laboral.<br/>
              <Typography  sx={{fontSize: "26px", fontWeight: '600'}}>¿Tienes un Proyecto/ Curso que te gustaría impulsar? Envíanos un correo con tu nombre, área de interés y adjuntando tu cv a nuestro mail.</Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              display: { xs: "block", sm: "flex" },
              padding: { xs: "10px", sm: "30px" },
              margin: { xs: "0 0px", sm: "0" },
              borderRadius: { xs: "8px", sm: "30px" },
              width: { xs: "100%", sm: "auto" },
              gap: "30px",
              paddingBottom: '0px',
              flex: "50%",
            }}>
            <Box sx={{ flex: { xs: "100%", sm: "66%" }, width: "100%", height: 'fit-content', py: '3vh' }}>
              {/* <ContactForm sending={false} titulo="Formulario"  textButton={'Enviar'}  /> */}
              <Contact textBoolean={true}  />
            </Box>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};


export default WorkWithUs;
