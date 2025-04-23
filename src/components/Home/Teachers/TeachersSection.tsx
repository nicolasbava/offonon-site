import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
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

    const teachersData = [
        {
            url: 'pakal-docente.png',
            name: 'Pakal Vega'
        },
        {
            url: 'tao-docente.png',
            name: 'Tao Vega'
        },
        {
            url: 'nico-docente.png',
            name: 'Nicolás Bava'
        },
        {
            url: 'pakal-docente.png',
            name: 'Pakal Vega'
        },
        {
            url: 'pakal-docente.png',
            name: 'Pakal Vega'
        }
    ]

    return (
        <Box  sx={{ paddingInline:{xs: 8, md: 12}, margin: 'auto', textAlign: 'center', paddingBlock: 4, pt: 30, background: '#1d1923', position: 'relative', zIndex: 99 }}>
            <Stack id='teachers' sx={{pt: 14, flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                <DividerStyled />
                <Typography sx={{ fontSize:{xs:'28px', md: '46px'}, fontWeight: '600', minWidth: {xs:'112px',md: '457px'} }}>Nuestros docentes</Typography>
            </Stack>
            <Grid2 container direction='row' spacing={0} columns={10} sx={{margin: 'auto', pt: 4, alignItems: 'center', justifyContent: 'center' }}>
                    {teachersData.map(ele => (
                        <Grid2 key={ele.name}  size={{ xs: 10, md: 2 }}>
                            <TeacherComponent data={ele}/>
                        </Grid2>
                    ))}
            </Grid2>

        </Box>
    )
};

export default TeachersSection;