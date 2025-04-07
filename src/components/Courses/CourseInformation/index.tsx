import { Box, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SuperiorShadow } from "../../Home/RentsDJProductionSection";
import CourseStructure from "./CourseStructure";
import CourseDetail from "./CourseDetail";
import { px } from "framer-motion";

const CourseInformation = ({data}) => {


    return (
        <Box
            sx={{
                minHeight: '170vh',
                background: '#1d1923',
                marginBottom: '30vh'
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
                    <CourseDetail data={data} />
                </Grid2>
            </Grid2>
        </Box>
    )
};

export default CourseInformation;