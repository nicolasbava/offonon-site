import { ServiceI } from "@/types/services";
import { Box, Stack, Typography } from "@mui/material";


const ServiceDetail = ({data} : {data: ServiceI}) => {

    return (
        <Box sx={{margin: 'auto',  display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
            <Typography mt={4} variant='h3' fontWeight={'bold'}>{data.title}</Typography>
            <Typography my={2}>{data.description}</Typography>

            <Typography sx={{fontSize: '20px', fontWeight: 'bold'}}  my={2}>{data.title_structure}</Typography>
            {data.structure?.map((ele, key) => (
                <Typography component={'ul'} key={key} >
                    <Typography component={'li'} mb={2}>{ele}.</Typography>
                </Typography>

            ))}

            {/* {data.sub_service && 
                data.sub_service.map((ele, key) => (
                    <Typography key={key} my={2}>{ele}</Typography>
                ))
            } */}
            {/* {JSON.stringify(data.outro)} */}
            {data.outro && 
                data.outro.map((ele,key) => (
                    
                    <Typography py={0} key={key} my={1}>{ele}.</Typography>
                ))
            }
        </Box>
    )
};

export default ServiceDetail;