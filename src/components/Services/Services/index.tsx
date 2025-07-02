import { Box, Button, Grid2, Stack } from "@mui/material";
import { SuperiorShadow } from "../../Home/RentsDJProduction/RentsDJProductionSection";
import ServiceDetail from "./ServiceDetail";
import { ServiceI } from "@/types/services";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ServiceInformation = ({data} : {data: ServiceI}) => {
   

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: '#1d1923',
                // paddingBottom: '10vh',
                position: 'relative',
                zIndex: 10
            }}
        >
            <SuperiorShadow />
            <Grid2 container spacing={0} sx={{
                maxWidth: {xs: '90%',  lg: '70%'},
                margin: 'auto',
                paddingTop: {xs:12, md:12},
                paddingBottom: 16,
            }}>
                <Grid2 
                    size={{ xs: 12, md: 12 }}
                >
                    <Button variant='text' href='/home#services'>
                        <ArrowBackIcon sx={{fontSize: '20px', mr: '4px'}} />
                        Atrás
                    </Button>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <ServiceDetail data={data} />
                </Grid2>

                {/* <Grid2 
                    size={{ xs: 12, md: 12 }}
                    mt={4}
                >
                    <Button variant='contained'>¡QUIERO INSCRIBIRME!</Button>
                </Grid2> */}
            </Grid2>
        </Box>
    )
};

export default ServiceInformation;