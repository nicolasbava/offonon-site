'use client'
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { DividerStyled } from "../atoms/Common";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import { useTheme } from "@mui/material/styles";

const QuienesSomos = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));


    const { scrollYProgress, scrollY } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });


    const blur = useTransform(scrollYProgress, [0, 0.44, 1.5], ['blur(4px)', 'blur(0px)', 'blur(4px)',]);
    // const zIndex = useTransform(scrollY, [0, 2500], ['99', -19]);

    return (

     <motion.div
                ref={containerRef}
                style={{
                    position: 'sticky',
                    top: isXs ? "10%" : '30%',
                    filter: blur,
                    zIndex: 8,
                }}
                transition={{ type: 'easeIn' }}
            >

        <Box
            sx={{
                paddingInline: '32px',
                paddingBottom: '32px',
                marginTop: 44,
                marginBottom: 74,
                background: '#1d1923',
                color: 'white',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 8
            }} >
       
            <Stack sx={{ maxWidth: { xs: '100%', md: '75%' }, margin: 'auto' }}>
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                    <Typography sx={{ fontSize: { xs: '28px', md: '43px' }, fontWeight: 'bold', minWidth: { xs: '250px', sm: '320px', md: '400px' }, width: 'max-content' }}>
                        ¿Quiénes somos?
                    </Typography>
                    <DividerStyled />
                </Stack>

                <Box>
                    <Typography mt={2}>En OffOnOn te ayudamos a llevar tu música al siguiente nivel. Aprende a producir, mezclar y masterizar con calidad profesional. Finaliza tus tracks listos para ser firmados por sellos nacionales e internacionales y adquiere conocimientos clave sobre derechos de autor y monetización para vivir de tu pasión. Conéctate con profesionales activos en la industria y accede a recursos exclusivos para potenciar tu conocimiento.</Typography>
                    <Typography mt={2}>Forma parte de nuestra comunidad, comparte tus proyectos y recibe retroalimentación para mejorar. Además obtén oportunidades para conseguir tus primeros gigs y lanzar tu música con éxito. Únete ahora y has que la música hable por ti.</Typography>
                    {/* <TextAnimation text={"En OffOnOn te ayudamos a llevar tu música al siguiente nivel. Aprende a producir, mezclar y masterizar con calidad profesional. Finaliza tus tracks listos para ser firmados por sellos internacionales y adquiere conocimientos clave sobre derechos de autor y monetización para vivir de tu pasión. Conéctate con profesionales activos en la industria y accede a recursos exclusivos para potenciar tu conocimiento."} /> */}
                    {/* <TextAnimation text={"Forma parte de nuestra comunidad, comparte tus proyectos y recibe retroalimentación para mejorar. Además obtén oportunidades para conseguir tus primeros gigs y lanzar tu música con éxito. Únete ahora y has que la música hable por ti."} /> */}
                </Box>

                <Button variant="contained" sx={{ marginRight: 'auto', mt: 4, }}>AGENDA TU CLASE MUESTRA</Button>
            </Stack>

        </ Box>
            </motion.div>

    )
};

export default QuienesSomos;