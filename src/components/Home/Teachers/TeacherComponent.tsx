import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DividerStyled } from "@/components/Common";

const Logo = styled("img")(() => ({
  maxWidth: "92px",
}));

const TeacherComponent = ({name, link}: {name:string,link:string}) => {
    
    return ( 
        <Stack sx={{maxWidth: '80%', margin: 'auto', textAlign: 'center' }}>
            {/* <Logo
            src={"/offonon/waves.png"}
            alt="alt1"
            loading="lazy"
            sx={{
                height: "auto",
            }}
            /> */}
            <Box sx={{width: '100%', height: {xs:'30vh', md: '60vh'}, background: 'grey'}}></Box>
            <Typography sx={{fontSize: '28px', fontWeight: 'bold'}}>jujuy gonzalez</Typography>
        </Stack>
    )
};

export default TeacherComponent;