import { Course } from "@/types/courses";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const ServiceStructure = ({ data }: { data: Course[] }) => {

    const CourseImg = styled("img")(({ theme }) => ({
        maxWidth: "290px",
        margin: 'auto',
        [theme.breakpoints.up('md')]: {
            // maxWidth: "350px",
            marginRight: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            width: "80%",
            maxWidth: "100%",
            marginRight: 'auto',
        }
    }));


    return (
        <Box mt={2}  >
            {/* <Box mt={2} sx={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'relative', textAlign: 'center' }} >

                <CourseImg
                    src={"/offonon/cursos-1.png"}
                    alt="alt1"
                    loading="lazy"
                />
                <Typography
                    sx={{ position: 'absolute', top: '40%', left: '0', right: '0', fontSize: '26px', fontWeight: 'bold', textShadow: '2px 2px 0px black', width: { xs: '60%', md: '45%' }, margin: 'auto' }}>PRODUCCIÓN MUSICAL</Typography>
            </Box> */}

            {/* <Grid2 container sx={{width: {xs: '100%', md:'80%'}, margin: 'auto', mt: 4}}>
                <Grid2 size={{ xs: 12, md: 11.5 }}>
                    <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Estructura</Typography>
                    {data[0].structure.map((ele, key) => (
                        <Stack my={2} key={key} direction={'row'}>
                            <Typography mr={1} >- {ele.name}</Typography>
                            <Typography >({ele.duration}).</Typography>
                        </Stack>
                    ))}
                </Grid2>
                <Grid2 size={{ xs: 0, md: 0.5}} sx={{ display: { xs: 'none', md: 'inline-block' }, marginLeft: 'auto' }}>
                    <Box sx={{ height: '85%', width: '3px', background: 'white', marginTop: 2, borderRadius: '5px' }}> </Box>

                </Grid2>

            </Grid2> */}

        </Box>
    )
};

export default ServiceStructure;