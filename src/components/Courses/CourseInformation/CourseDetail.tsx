import { Course } from "@/types/courses";
import { Box, Stack, Typography } from "@mui/material";


const CourseDetail = ({data} : {data: Course}) => {

    // const CourseImg = styled("img")(({ theme }) => ({
    //     maxWidth: "320px",
    //     [theme.breakpoints.up('md')]: {
    //         maxWidth: "450px",
    //     }
    // }));


    return (
        <Box sx={{margin: 'auto',  display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
            <Typography mt={4} variant='h3' fontWeight={'bold'}>Detalles de curso</Typography>
            <Typography mt={2}>{data.detail}</Typography>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Duración:</Typography>
                <Typography>{data.duration}</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Formato:</Typography>
                <Typography>{data.format}</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Grabaciones:</Typography>
                <Typography>{data.recordings}</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Descuento:</Typography>
                <Typography>{data.discount}</Typography>
            </Stack>

            <Typography mt={4} variant='h3' fontWeight={'bold'}>Calendario</Typography>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Horarios flexibles:</Typography>
                <Typography>adaptados a tu rutina</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Clases intercaladas:</Typography>
                <Typography>{data.cadence}</Typography>
            </Stack>

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Sesión de Dudas y Creación de Track:</Typography>
                <Typography>{data.supportSession}</Typography>
            </Stack>
        </Box>
    )
};

export default CourseDetail;