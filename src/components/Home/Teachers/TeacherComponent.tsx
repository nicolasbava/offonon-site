import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DividerStyled } from "@/components/Common";

const Logo = styled("img")(({ theme }) => ({
    width: '100%',
    height: 'auto',
    filter: 'grayscale(100%)',
    transition: 'filter 0.5s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      filter: 'grayscale(0%)',
    },
  }));


const TeacherComponent = ({ data }: { data: { name: string; url: string } }) => {
    
    return ( 
        <Stack sx={{maxWidth: '80%', margin: 'auto', textAlign: 'center', position: 'relative', zIndex: 99 }}>
            <Logo
                src={`/offonon/teachers/${data.url}`}
                alt="alt1"
                loading="lazy"
            />
            {/* {data.name}{data.url} */}
            {/* <Box sx={{width: '100%', height: {xs:'30vh', md: '60vh'}, background: 'grey'}}></Box> */}
            <Typography sx={{fontSize: '28px', fontWeight: 'bold'}}>{data.name}</Typography>
        </Stack>
    )
};

export default TeacherComponent;