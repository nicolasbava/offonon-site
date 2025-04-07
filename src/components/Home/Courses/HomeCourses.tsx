import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CoursesList from "./CoursesList";
import { DividerStyled } from "@/components/Common";

const Logo = styled("img")(() => ({
    maxWidth: "35vw",
    // maxHeight: "250px",
    borderRadius: '54px'
}));

const infoCourses = [
    {
        title: 'BÁSICO ONLINE PRESENCIAL NORMAL',
        link: '#'
    },
    {
        title: 'BÁSICO ONLINE PRESENCIAL INTENSIVO',
        link: '#'
    },
    {
        title: 'INTERMEDIO - AVANZADO',
        link: '#'
    },
    {
        title: 'PERSONALIZADAS',
        link: '#'
    },
    {
        title: 'GRUPALES',
        link: '#'
    },
]

const HomeCourses = () => {

    return (
        <Box sx={{ maxWidth: '80%', margin: 'auto', textAlign: 'center', marginBlock: 4, mt: 8 }}>
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
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <Logo
                        src={"/offonon/foto-cursos-cabina-min.jpg"}
                        alt="alt1"
                        loading="lazy"
                        sx={{
                            height: "auto",
                            display: { xs: "none", md: "block" },
                        }}
                    />
                </Grid2>
            </Grid2>

        </Box>
    )
};

export default HomeCourses;