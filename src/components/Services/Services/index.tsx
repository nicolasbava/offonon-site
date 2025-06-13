import { Box, Grid2, Stack } from "@mui/material";
import { SuperiorShadow } from "../../Home/RentsDJProduction/RentsDJProductionSection";
import ServiceDetail from "./ServiceDetail";
import { ServiceI } from "@/types/services";

const ServiceInformation = ({data} : {data: ServiceI}) => {
   

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
                paddingTop: {xs:12, md:12},
                marginBottom: 8,
            }}>
                <Grid2 size={{ xs: 12, md: 12 }}>
                    <ServiceDetail data={data} />
                </Grid2>
            </Grid2>
        </Box>
    )
};

export default ServiceInformation;