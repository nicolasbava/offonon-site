import { ServiceI, SubServiceI } from "@/types/services";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import MixMasterComponent from "./MixMasterComponent";


const MixMasterMolecule = ({sub_service} : {sub_service: SubServiceI[]}) => {
    if (!sub_service) {
        return (
            <Box sx={{margin: 'auto',  display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
                <Typography variant='h4'>No hay información disponible</Typography>
            </Box>
        );
    }


    return (
        <Box sx={{margin: 'auto',  display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
            <Grid2 container spacing={2}>
                

                {sub_service.map((ele,key) => (
                    <Grid2 size={{xs:12, md:6}} key={key} sx={{margin:'auto'}}>
                        <MixMasterComponent  data={ele} />
                    </Grid2>
                ))}
            
             </Grid2>

        </Box>
    )
};

export default MixMasterMolecule;