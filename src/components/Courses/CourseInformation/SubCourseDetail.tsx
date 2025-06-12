import { SubCourse } from "@/types/courses";
import { Box, Typography } from "@mui/material";


const SubCourseDetail = ({data} : {data: SubCourse}) => {

    return (
        <Box sx={{marginRight: 'auto',  display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: {xs: '100%', lg: '90%'}, mt: 4 }} >
            <Typography mt={2} variant='h3' fontWeight={'bold'}>{data.name}</Typography>
            <Typography mt={2}>{data.detail}</Typography>
            <Typography component='ul'>
                {data.structure.map((ele : string) => (
                    <Typography sx={{my: 2}} component='li' key={ele}>
                        {ele}
                    </Typography>
                ))}
            </Typography>   
        </Box>
    )
};

export default SubCourseDetail;