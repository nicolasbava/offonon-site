import { ServiceI } from "@/types/services";
import { Box, Grid2, Typography } from "@mui/material";
import MixMasterMolecule from "../Mix&Master";


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

            {data.sub_service &&
                <MixMasterMolecule sub_service={data.sub_service} />
            }

            {data.outro && 
                data.outro.map((ele,key) => (
                    <Typography py={0} key={key} my={1}>{ele}.</Typography>
                ))
            }
        </Box>
    )
};

export default ServiceDetail;



// si tiene algun trabajo para mostrar, que lo suba a soundcloud en privado y nos deja el link por aca
// (input de texto que reciba un link de soundcloud) para clases

// yuls encarcado del area de multimedia en teachers
// y agregar a vampy tambien

// agregar descripcion a los artistas que forman parte y lo que hacen
