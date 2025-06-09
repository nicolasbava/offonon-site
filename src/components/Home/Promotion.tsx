import { Box, Button, Grid2, Stack, Typography } from "@mui/material";


const Promotion = () => {
    
    return (
    <>
        <Box sx={{position: 'relative', zIndex: 99,}}>
            <Grid2 container>
                <Grid2  
                    size={{xs: 12, md: 6}} 
                    sx={{
                        padding: 4, 
                        backgroundImage: 'url(/offonon/fondo-azul.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', 
                        height: {xs: '55vh', md:'55vh' }, 
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                >
                        <Stack 
                            sx={{
                                textAlign: 'center',
                            }}
                        >
                            <Typography sx={{fontSize: {xs:'85px',md: '112px'}, fontWeight: '600', textShadow: '7px 7px 0px black', cursor: 'pointer', lineHeight: '1'}}>20%</Typography>
                            <Typography 
                                sx={{
                                    margin: 'auto', 
                                    fontWeight: '600', 
                                    textShadow: '3px 3px 0px black', 
                                    maxWidth: {xs: '100%', md:'70%'}, 
                                    fontSize: {xs: '26px', md: '32px'}, 
                                }}>
                                    de descuento en tu primer curso
                            </Typography>
                            <Button 
                                variant='outlined' 
                                size='small' 
                                sx={{
                                    fontSize: '24px', 
                                    border: '2px solid white', 
                                    color: 'white',
                                    width: 'fit-content',
                                    margin: 'auto',
                                    pt: 2,
                                    px: {xs: 6, sm:6, md:8, lg: 10}
                                }}> ADQUIRIR</Button>
                        </Stack>
                </Grid2>
                <Grid2  
                    size={{xs: 12, md: 6}}  
                    sx={{
                        padding: 4, 
                        background: 'black', 
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box sx={{textAlign: 'center'}}>
                        <Typography 
                            sx={{
                                fontSize: {xs:'55px',md: '112px'}, 
                                fontWeight: '500', 
                                textShadow: '7px 7px 0px #1e1e1e', 
                                cursor: 'pointer', 
                                lineHeight: '1.0'
                            }}>
                                ¡GRATIS!
                        </Typography>
                        <Typography 
                            sx={{
                                maxWidth: {xs: '80%', md: '70%'},
                                margin: 'auto', 
                                fontSize: {xs:'22px', md: '30px'}, 
                                fontWeight: '600'
                            }}>
                                Adquiere acceso a 4 masterclass pregrabadas
                        </Typography>
                        <Button 
                            variant='contained' 
                            sx={{
                                mt: 2, 
                                fontSize: '20px', 
                                color: 'black', 
                                border: '2px solid white', 
                                background: 'white', 
                                fontWeight: 'bold', 
                                px: {xs: 6, sm:6, md:8, lg: 10}, 
                                transition: '250ms all ease', 
                                '&:hover': {border: '2px solid grey'}
                            }} 
                            size='small'
                        >
                            RECLAMAR
                        </Button>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    </>
    )
};

export default Promotion;