import { Box, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ServicesList from "./ServicesList";
import { DividerStyled } from "@/components/atoms/Common";
 
const ImageCourses = styled("img")(({ theme }) => ({
    maxWidth: "90vw",
    // maxHeight: "250px",
    borderRadius: '54px',
    margin: 'auto',
    // maxHeight: '80vh',
    [theme.breakpoints.up('md')]: {
        maxWidth: "35vw",
    }
}));

const infoServices = [
    {
        title: 'Renta de Cabina Profesional',
        link: '/services/dj-booth'
    },
    {
        title: 'Sesión de Fotos Profesionales',
        link: '/services/photos'
    },
    {
        title: 'Presskit + Bio + Página Web',
        link: '/services/presskit-bio-web'
    },
    {
        title: 'Servicio de mezcla y master',
        link: '/services/mix-master'
    }
]

const HomeServices = () => {

    return (
        <Box id='services' sx={{ paddingInline:{xs: 2, md: 12 }, margin: 'auto', textAlign: 'center', marginBlock: -1, position: 'relative', zIndex: 99, background: '#1d1923', pb: 12, paddingTop: '40vh' }}>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2, marginBottom: 4}}>
                <Typography sx={{ fontSize: {xs:'28px', md: '46px'}, fontWeight: '600', width: {xs:'100%', md:'800px'} }}>Nuestros Servicios</Typography>
                <DividerStyled />
            </Stack>
            <Grid2 container direction='row' rowGap={4} >
                    <Grid2 size={{ xs: 12, md: 6 }}>
                    {infoServices.slice(0, Math.round(infoServices.length / 2 )).map(ele => (
                        <ServicesList key={ele.title}  name={ele.title} link={ele.link} />
                    ))}
                    </Grid2>
                     <Grid2 size={{ xs: 12, md: 6 }} >
                    {infoServices.slice(Math.round(infoServices.length / 2 )).map(ele => (
                        <ServicesList key={ele.title}  name={ele.title} link={ele.link} />
                    ))}
                    </Grid2>
            </Grid2>

        </Box>
    )
};

export default HomeServices;