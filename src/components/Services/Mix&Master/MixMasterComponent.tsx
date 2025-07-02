import { SubServiceI } from "@/types/services";
import { Box, Typography } from "@mui/material";


const MixMasterComponent = ({data} : {data: SubServiceI}) => {
    return (
        <Box>
            <Box  sx={{ padding: 4, background: '#80808026', borderRadius: '29px'}}>
                <Typography mt={4}  fontWeight={'bold'} sx={{textAlign: 'center'}}>{data.title}</Typography>
                <Box sx={{margin: 'auto', width: 'fit-content'}}>

                {data.description.map((ele,key) => (
                    <Typography key={key} py={0}  my={1}>{ele.stems} --- {ele.price}.</Typography>
                ))}
                </Box>
            </Box>
        </Box>
    )
};

export default MixMasterComponent;