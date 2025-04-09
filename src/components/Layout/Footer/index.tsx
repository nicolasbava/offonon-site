import React, { forwardRef } from "react";
import { Grid, Typography, Stack, styled, useTheme } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

import Link from "next/link";
import Divider from "@mui/material/Divider";
import StyledFooterContainer from "@/components/Layout/Footer/StyledFooterContainer";
import StyledFooterSection from "@/components/Layout/Footer/StyledFooterSection";
import { LogoFooter } from "@/components/Logo";
// import StyledTitleElement from '@/components/StyledTitleElement';
import StyledWhatsappAnchor from "@/components/StyledWhatsappAnchor";

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
          sx={{ paddingTop: "5vh", flexDirection: {xs:'column', md: 'row'} }}>
          <Grid item xs={12} md={3}>
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

          <Grid item xs={12} md={3} mb={{ xs: 0, md: 8 }} my={{xs: 4, md:2}}>
            <Typography sx={{ color: "white", fontSize: "26px", textAlign: {xs: 'center', md: 'left'}, maxWidth: {xs: '100%', sm: '80%'}, margin:'auto', marginRight: 'auto' }}>
              “Formando verdaderos profesionales”
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{ color: theme.palette.background.default, marginBlock: {xs: 4, md: 0},  }}>
            <Typography variant="h5" mb={1} >
              Menú
            </Typography>
            <StyledUl >
              <li>
                <StyledLink href={"/"}>Inicio</StyledLink>
              </li>
              <li>
                <StyledLink href={"/cursos"}>Cursos</StyledLink>
              </li>
              <li>
                <StyledLink href={"/eventos"}>Eventos</StyledLink>
              </li>
              <li>
                <StyledLink href={"/trabaja-con-nosotros"}>Trabaja con nosotros</StyledLink>
              </li>
              <li>
                <StyledLink href={"/inscribete"}>Inscribete</StyledLink>
              </li>
            </StyledUl>
          </Grid>

          <Grid item xs={12} md={3} mb={{ xs: 7, md: 4 }} >
            <StyledLink target="_blank" href="https://www.instagram.com/centropierre/">
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

            <StyledLink target="_blank" href="https://www.facebook.com/CentroPIERRE">
              <Stack direction="row" my={1} spacing={1}>
                <ImageElement
                  src="/logo-fb.png"
                  alt="Logo Facebook"
                  width="20"
                  height="20"
                />
                <Typography variant="body2">Facebook</Typography>
              </Stack>
            </StyledLink>

            <StyledLink target="_blank" href="https://api.whatsapp.com/send/?phone=5493884778611&text&type=phone_number&app_absent=0">
              <Stack direction="row" my={1} spacing={1}>
                <ImageElement
                  src="/logo-wsp.png"
                  alt="Logo Whatsapp"
                  width="20"
                  height="20"
                />
                <Typography variant="body2">Whatsapp</Typography>
              </Stack>
            </StyledLink>

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

            <StyledLink target="_blank" href="https://goo.gl/maps/ZqNUo4ANqQJoYdKP7">
              <Stack direction="row" my={1} spacing={1}>
                <ImageElement
                  src="/logo-location.png"
                  alt="Logo Ubicación"
                  width="20"
                  height="20"
                />
                <Typography variant="body2">Gral. San Martin 698</Typography>
              </Stack>
            </StyledLink>
          </Grid>
        </Grid>
      </StyledFooterContainer>
    </Box>
  );
});

Footer.displayName = "Footer";
export default Footer;
