import { Course } from "@/types/courses";
import { Box, Grid2, Stack, Typography } from "@mui/material";


const CourseDetail2 = ({data} : {data: Course}) => {

    // const CourseImg = styled("img")(({ theme }) => ({
    //     maxWidth: "320px",
    //     [theme.breakpoints.up('md')]: {
    //         maxWidth: "450px",
    //     }
    // }));

    console.log('data structure', data.structure[0].description)


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
 {/* <Grid2 container sx={{width: {xs: '100%', md:'80%'}, margin: 'auto', mt: 4}}> */}
                {/* <Grid2 size={{ xs: 12, md: 11.5 }}> */}
                    <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 0 }}>Contenido</Typography>
                    

                    {data.structure.map((ele, key) => (
                        <>
                        <Stack mt={2} key={key} direction={'column'} justifyContent={'flex-start'}>
                            <Typography mr={1} fontSize={22} fontWeight={'bold'}>{ele.name}</Typography>
                            <Box pl={1}>

                            <Typography ><strong>Cantidad:</strong>  {ele.duration}.</Typography>
                            {ele.description ? 
                                <Typography fontWeight={'bold'} >Descripción:</Typography>
                                : ''
                            }
                            </Box>
                        </Stack>
                        <Box>
                            <Typography component={'ul'}>

                            {ele.description?.map((element, keyE) => (
                                <Typography component={'li'} key={keyE + element}>{element}</Typography>
                            ))}
                            </Typography>
                        </Box>
                        </>
                    ))}

                {/* </Grid2> */}
                {/* <Grid2 size={{ xs: 0, md: 0.5}} sx={{ display: { xs: 'none', md: 'inline-block' }, marginLeft: 'auto' }}>
                    <Box sx={{ height: '85%', width: '3px', background: 'white', marginTop: 2, borderRadius: '5px' }}> </Box>

                </Grid2> */}

            {/* </Grid2>     */}

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

            <Stack direction={'row'} mt={2}>
                <Typography mr={1} fontWeight={'bold'}>Sesión de Dudas y Creación de Track:</Typography>
                <Typography>{data.supportSession}</Typography>
            </Stack>

            <Stack direction={'row'} mt={2} mb={2}>
                <Typography mr={1} fontWeight={'bold'}>Itinerario semanal de ejemplo:</Typography>
            </Stack>
        </Box>
    )
};

export default CourseDetail2;