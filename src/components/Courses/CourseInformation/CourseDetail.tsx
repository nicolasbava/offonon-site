import { Box, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SuperiorShadow } from "../../Home/RentsDJProductionSection";
import CourseStructure from "../CourseStructure";

const CourseDetail = ({data}) => {

    const CourseImg = styled("img")(({ theme }) => ({
        maxWidth: "320px",
        [theme.breakpoints.up('md')]: {
            maxWidth: "450px",
        }
    }));
    console.log('data CourseDetail', data)


    return (
        <Box sx={{margin: 'auto',  display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
            <Typography mt={4} variant='h3' fontWeight={'bold'}>Detalles de curso</Typography>
            <Typography mt={2}>{data[0].detail}</Typography>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Duración:</Typography>
                <Typography>{data[0].duration}</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Formato:</Typography>
                <Typography>{data[0].format}</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Grabaciones:</Typography>
                <Typography>{data[0].recordings}</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Descuento:</Typography>
                <Typography>{data[0].discount}</Typography>
            </Stack>

            <Typography mt={4} variant='h3' fontWeight={'bold'}>Calendario</Typography>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Horarios flexibles:</Typography>
                <Typography>adaptados a tu rutina</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Clases intercaladas:</Typography>
                <Typography>{data[0].cadence}</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Sesión de Dudas y Creación de Track:</Typography>
                <Typography>{data[0].supportSession}</Typography>
            </Stack>
        </Box>
    )
};

export default CourseDetail;