import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CoursesList from "./CoursesList";
import { DividerStyled } from "@/components/atoms/Common";
 
const ImageCourses = styled("img")(({ theme }) => ({
    maxWidth: "90vw",
    // maxHeight: "250px",
    borderRadius: '54px',
    margin: 'auto',
    // maxHeight: '80vh',
    [theme.breakpoints.up('md')]: {
        maxWidth: "35vw",
    },
    [theme.breakpoints.up('lg')]: {
        maxWidth: "40vw",
    }
}));

const infoCourses = [
    {
        title: 'Producción Musical Grupal',
        link: '/courses/music-production'
    },
    {
        title: 'Curso de DJ',
        link: '/courses/dj'
    },
    {
        title: 'Curso de Mix/Master',
        link: '/courses/mix-master'
    },
    {
        title: 'Clases Personalizadas',
        link: '/courses/personalized-classes'
    },
    {
        title: 'Mentorías Privadas (por hora)',
        link: '/courses/private-mentoring'      
    },
    {
        title: 'Curso de Touchdesigner',
        link: '/courses/touchdesigner'
    },
    {
        title: 'Curso de Experiencias Inmersivas',
        link: '/courses/immersive-experiences'
    },
]

const HomeCourses = () => {

    return (
        <Box id='courses' sx={{ paddingInline:{xs: 2, md: 12 }, margin: 'auto', textAlign: 'center', marginBlock: -1, pt: 8, position: 'relative', zIndex: 99, background: '#1d1923' }}>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <Typography sx={{ fontSize: {xs:'28px', md: '46px'}, fontWeight: '600', width: {xs:'100%', md:'600px'} }}>Nuestros cursos</Typography>
                <DividerStyled />
            </Stack>
            <Grid2 container direction='row' mt={4}>
                <Grid2 size={{ xs: 12, md: 6 }}>
                    {infoCourses.map(ele => (
                        <CoursesList key={ele.title} name={ele.title} link={ele.link} />
                    ))}
                </Grid2>
                <Grid2 size={{ xs: 12, md: 6 }} mt={8}>
                    <ImageCourses
                        src={"/offonon/foto-cursos-cabina-min.jpg"}
                        alt="alt1"
                        loading="lazy"
                        sx={{
                            height: "auto",
                            // display: { xs: "none", md: "block" },
                        }}
                    />
                </Grid2>

                
            </Grid2>

        </Box>
    )
};

export default HomeCourses;