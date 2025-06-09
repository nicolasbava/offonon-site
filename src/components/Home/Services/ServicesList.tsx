import { Button, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const Logo = styled("img")(() => ({
  maxWidth: "92px",
}));

const ServicesList = ({name, link}: {name:string, link:string}) => {
    
    return ( 
        <Stack direction='column' 
            sx={{
                padding: 6, 
                maxWidth: {xs:'100%', md: '500px',}, 
                textAlign: 'center', 
                borderRadius: '57px',
                border: '2px solid #ffffff3d',
                margin: 'auto',
                marginBlock: '48px',
                boxShadow: '0px 9px 5px #0000004d',
                background: '#1b1426'
            }}>
                <Stack sx={{textAlign: 'left', justifyContent: 'space-between'}} direction='row'>
                    <Typography sx={{fontSize: {xs:'18px' ,md:'24px'}, fontWeight: 'bold', maxWidth: '250px'}}>{name}</Typography>
                    <Logo
                    src={"/offonon/waves.png"}
                    alt="alt1"
                    loading="lazy"
                    sx={{
                        height: "auto",
                    }}
                    />
                </Stack>
                <Link href={link} style={{margin: 'auto', marginTop: '48px', }}>
                    <Button variant='contained' sx={{width: 'fit-content', marginLeft: 'auto', mt: 0, minWidth: '250px', paddingBlock: '16px'}}>MÁS INFO</Button>
                </Link>
        </Stack>
    )
};

export default ServicesList;