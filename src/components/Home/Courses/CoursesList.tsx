import { Box, Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DividerStyled } from "@/components/atoms/Common";
import Link from "next/link";

const Logo = styled("img")(() => ({
  maxWidth: "92px",
}));

const CoursesList = ({name, link}: {name:string, link:string}) => {
    
    return ( 
        <Stack sx={{maxWidth: {xs:'100%', md: '80%'}, margin: 'auto', textAlign: 'center', marginBlock: 6, }}>
            <Stack direction='row' alignItems='center' spacing={0} sx={{mb: 2}}>
                <Logo
                src={"/offonon/waves.png"}
                alt="alt1"
                loading="lazy"
                sx={{
                    height: "auto",
                }}
                />
                <Box sx={{textAlign: 'left'}}>
                    <Typography sx={{fontSize: {xs:'18px' ,md:'24px'}, fontWeight: 'bold', maxWidth: '300px'}}>{name}</Typography>
                    {/* <Typography sx={{fontSize: '24px', fontWeight: 'bold'}}>PRESENCIAL NORMAL</Typography> */}
                </Box>
                <Link href={link} style={{marginLeft: 'auto'}}>
                    <Button variant='contained' sx={{width: 'fit-content', marginLeft: 'auto', mt: 0}}>MÁS INFO</Button>
                </Link>
            </Stack>
            <DividerStyled   />
        </Stack>
    )
};

export default CoursesList;