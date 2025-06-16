import { Course } from "@/types/courses";
import { Box, Typography } from "@mui/material";


const CourseDetail = ({data} : {data: Course}) => {

    return (
        <Box sx={{margin: 'auto',  display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
            {/* SERVICES */}
            <Typography mt={2} variant='h3' fontWeight={'bold'}>{data.name}</Typography>
            <Typography mt={2} sx={{fontSize: '20px'}}>{data.intro}</Typography>
            {
                data.detail && <Typography mt={2}>{data.detail}</Typography>
            }
            <Typography component='ol'>
                {data.structure.map((ele) => (
                    <Typography component='li' key={ele} sx={{my: 2}}>
                        {ele}
                    </Typography>
                ))} 
            </Typography>
            <Typography mt={2} sx={{fontSize: '18px'}}>{data.outro}</Typography>
            {/* {data.outro && 
                data.outro.map((ele,key) => (
                    <Typography py={0} key={key} my={1}>{ele}</Typography>
                ))
            } */}
        </Box>
    )
};

export default CourseDetail;