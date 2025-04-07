import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CoursesList from "./CoursesList";
import { DividerStyled } from "@/components/Common";
import TeacherComponent from "./TeacherComponent";

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
        title: 'INTERMEDIO/AVANZADO',
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

const TeachersSection = () => {

    return (
        <Box sx={{ maxWidth: '80%', margin: 'auto', textAlign: 'center', marginBlock: 4, mt: 8 }}>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <DividerStyled />
                <Typography sx={{ fontSize:{xs:'28px', md: '46px'}, fontWeight: '600', minWidth: {xs:'112px',md: '457px'} }}>Nuestros docentes</Typography>
            </Stack>
            <Grid2 container direction='row' spacing={0} columns={10} sx={{margin: 'auto', mt: 4, alignItems: 'center', justifyContent: 'center' }}>
                    {infoCourses.map(ele => (
                        <Grid2 key={ele.title}  size={{ xs: 10, md: 2 }}>
                            <TeacherComponent />
                        </Grid2>
                    ))}
            </Grid2>

        </Box>
    )
};

export default TeachersSection;