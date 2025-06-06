import React, { forwardRef } from "react";
import { Grid, Typography, Stack, styled, useTheme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

import Link from "next/link";
import Divider from "@mui/material/Divider";
import StyledFooterContainer from "@/components/Layout/Footer/StyledFooterContainer";
import StyledFooterSection from "@/components/Layout/Footer/StyledFooterSection";
import { LogoFooter } from "@/components/atoms/Logo";
// import StyledTitleElement from '@/components/StyledTitleElement';
import StyledWhatsappAnchor from "@/components/atoms/StyledWhatsappAnchor";
import FooterMap from "./FooterMap";

const ImageElement = styled("img")(() => ({}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  transition: '150ms all ease',
  color: theme.palette.background.default,
  
  '&:hover':
  {
    color: '#bcbbbb'
  }
}));



const StyledUl = styled("ul")(({ theme }) => ({}));

const Footer = forwardRef<any, BoxProps>((props, ref) => {
  const theme = useTheme();

  return (
    <Box sx={{position: 'relative', zIndex: 99}}>
      <StyledWhatsappAnchor />

      <StyledFooterContainer ref={ref} {...props}>
        <Grid
          container
          columnSpacing={{ xs: 0, md: 2, lg: 0 }}
          alignItems={{xs:'center', md: 'stretch'}}
          justifyContent={{
            xs: "center",
            md: "space-evenly",
            lg: "space-between",
          }}
          sx={{ 
             flexDirection: {xs:'column', md: 'row'}
          }}
        >

          <Grid item xs={12} md={3} mt={4}>
            <StyledFooterSection>
              <Link href="/">
                <LogoFooter
                  alt={"Logo de Pierre, formando profesionales"}
                  width={235}
                  height={155}
                />
              </Link>
            </StyledFooterSection>
          </Grid>


          <Grid
            item
            xs={12}
            md={3}  
            sx={{ color: theme.palette.background.default, marginBlock: {xs: 4, md: 0},  }}
            pt={4}
            
            >
            <Typography variant="h5" mb={1} >
              Menú
            </Typography>
            <StyledUl >
              <li>
                <StyledLink href={"/home"}>Inicio</StyledLink>
              </li>
              <li>
                <StyledLink href={"/home#us"}>Nosotros</StyledLink>
              </li>
              <li>
                <StyledLink href={"/home#courses"}>Cursos</StyledLink>
              </li>
              <li>
                <StyledLink href={"/home#teachers"}>Docentes</StyledLink>
              </li>
              {/* <li>
                <StyledLink href={"/inscribete"}>Inscribete</StyledLink>
              </li> */}
            </StyledUl>
          </Grid>

          <Grid item xs={12} md={3} mb={{ xs: 7, md: 4 }} pt={{xs: 4, lg: 10}} >
            {/* <Typography variant="h5" mb={1} >
              Encuéntranos
            </Typography> */}
            <StyledLink target="_blank" href="https://www.instagram.com/offonon.studio/?locale=us&hl=en">
              <Stack direction="row" my={1} spacing={1}>
                <ImageElement
                  src="/logo-ig.png"
                  alt="Logo Instagram"
                  width="20"
                  height="20"
                />
                <Typography variant="body2">Instagram</Typography>
              </Stack>
            </StyledLink>

            {/* <StyledLink target="_blank" href="https://www.facebook.com/CentroPIERRE">
              <Stack direction="row" my={1} spacing={1}>
                <ImageElement
                  src="/logo-fb.png"
                  alt="Logo Facebook"
                  width="20"
                  height="20"
                />
                <Typography variant="body2">Facebook</Typography>
              </Stack>
            </StyledLink> */}

            {/* <StyledLink target="_blank" href="https://api.whatsapp.com/send/?phone=5493884778611&text&type=phone_number&app_absent=0">
              <Stack direction="row" my={1} spacing={1}>
                <ImageElement
                  src="/logo-wsp.png"
                  alt="Logo Whatsapp"
                  width="20"
                  height="20"
                />
                <Typography variant="body2">Whatsapp</Typography>
              </Stack>
            </StyledLink> */}

            <StyledLink target="_blank" href="mailto:centroprofesionalpierre@gmail.com">
              <Stack direction="row" my={1} spacing={1}>
                <ImageElement
                  src="/logo-mail.png"
                  alt="Logo Email"
                  width="20"
                  height="20"
                />
                <Typography variant="body2">Correo Electrónico</Typography>
              </Stack>
            </StyledLink>

            <StyledLink target="_blank" href="https://www.google.com/maps/place/Yautepec+2,+Colonia+Condesa,+Cuauht%C3%A9moc,+06140+Ciudad+de+M%C3%A9xico,+CDMX/data=!4m2!3m1!1s0x85d1ff445e6ad69d:0xff5b5e32bf3a87b5?sa=X&ved=1t:242&ictx=111">
              <Stack direction="row" my={1} spacing={1}>
                <ImageElement
                  src="/logo-location.png"
                  alt="Logo Ubicación"
                  width="20"
                  height="20"
                />
                <Typography variant="body2">Yautepec 2, Condesa CDMX</Typography>
              </Stack>
            </StyledLink>
          </Grid>
          
          <Grid item xs={12} md={3}  >
            {/* <Typography sx={{ color: "white", fontSize: "26px", textAlign: {xs: 'center', md: 'left'}, maxWidth: {xs: '100%', sm: '80%'}, margin:'auto', marginRight: 'auto' }}>
              “Formando verdaderos profesionales”
            </Typography> */}

            <FooterMap /> 
          </Grid>

        </Grid>
      </StyledFooterContainer>
    </Box>
  );
});

Footer.displayName = "Footer";
export default Footer;
