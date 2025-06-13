import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const HeroImageCourses = ({name}: {name:string}) => {

    const Logo = styled("img")(({ theme }) => ({
        maxWidth: "250px",
        maxHeight: "250px",
        [theme.breakpoints.up('md')]: {
            maxWidth: "381px",
        }
    }));

    return (
        <Box
            sx={{
                backgroundImage: "url('/offonon/cursos-imagen.png')",
                backgroundPosition: "center",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '90vh',
                backgroundAttachment: 'fixed'
            }}
        >
            <Stack sx={{ pt: 22, flexDirection: { xs: 'column', md: 'row' }, alignItems:'center', justifyContent:'space-evenly', position: 'fixed', zIndex: 0, width: '100%' }}>
                <Typography  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: {xs:'22px',md:'64px', lg:'64px'},
                    width: {xs:'auto', md: '42%'},
                    textShadow: '8px 8px 0px black',
                    textAlign:{xs: 'center', md: 'left'}
                }} >{name}</Typography>
                <Logo
                    src={"/offonon/offonon-logo2.png"}
                    alt="alt1"
                    loading="lazy"
                    sx={{
                        height: "auto",
                        width: { xs: "150px", md: "550px" },
                        // display: { xs: "none", md: "block" },
                    }}
                />
            </Stack>
        </Box>
    )
};

export default HeroImageCourses;