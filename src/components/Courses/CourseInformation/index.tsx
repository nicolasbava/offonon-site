import { Box, Button, Grid2 } from "@mui/material";
import { SuperiorShadow } from "../../Home/RentsDJProduction/RentsDJProductionSection";
import CourseDetail from "./CourseDetail";
import { Course } from "@/types/courses";
import SubCourseDetail from "./SubCourseDetail";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const CourseInformation = ({data} : {data: Course}) => {
 
    return (
        <Box
            sx={{
                minHeight: '170vh',
                background: '#1d1923',
                paddingBottom: '30vh',
                position: 'relative',
                zIndex: 10
            }}
        >
            <SuperiorShadow />

            <Grid2 container spacing={0} sx={{
                maxWidth: {xs: '90%',  lg: '70%'},
                margin: 'auto',
                // paddingTop: {xs:12, md:35},
                paddingTop: 10,
                marginBottom: 8,
            }}>
                {/* <Grid2 
                    size={{ xs: 12, md: 6 }} 
                >
                    <CourseStructure data={data} />

                    
                </Grid2> */}
                <Grid2 
                    size={{ xs: 12, md: 12 }}
                >
                    <Button variant='text' href='/home#courses'>
                        <ArrowBackIcon sx={{fontSize: '20px', mr: '4px'}} />
                        Atrás
                    </Button>
                </Grid2>
                <Grid2 
                    size={{ xs: 12, md: 12 }}
                >
                    <CourseDetail data={data} />
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }} sx={{mt: 4, pl: 6
                    
                }}>

                    {data.sub_course &&
                        data.sub_course.map((ele, key) => (
                            <SubCourseDetail key={key} data={ele} />
                        ))
                    }
                </Grid2>

                <Grid2 
                    size={{ xs: 12, md: 12 }}
                    mt={2}
                >
                    <Button variant='contained'>¡QUIERO INSCRIBIRME!</Button>
                </Grid2>
            </Grid2>
        </Box>
    )
};

export default CourseInformation;