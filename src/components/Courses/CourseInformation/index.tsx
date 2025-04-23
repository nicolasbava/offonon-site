import { Box, Grid2 } from "@mui/material";
import { SuperiorShadow } from "../../Home/RentsDJProduction/RentsDJProductionSection";
import CourseStructure from "./CourseStructure";
import CourseDetail from "./CourseDetail";
import { Course } from "@/types/courses";

const CourseInformation = ({data} : {data: Course[]}) => {


    return (
        <Box
            sx={{
                minHeight: '170vh',
                background: '#1d1923',
                marginBottom: '30vh',
                position: 'relative',
                zIndex: 10
            }}
        >
            <SuperiorShadow />

            <Grid2 container spacing={0} sx={{
                maxWidth: {xs: '90%',  lg: '70%'},
                margin: 'auto',
                paddingTop: {xs:12, md:35},
                marginBottom: 8,
            }}>
                <Grid2 
                    size={{ xs: 12, md: 6 }} 
                >
                    <CourseStructure data={data} />
                </Grid2>
                <Grid2 
                    size={{ xs: 12, md: 6 }}
                >
                    <CourseDetail data={data[0]} />
                </Grid2>
            </Grid2>
        </Box>
    )
};

export default CourseInformation;