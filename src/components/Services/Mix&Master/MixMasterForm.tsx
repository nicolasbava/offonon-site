import { ImageElement } from "@/components/atoms/Common/Image";
import MixMasterContactForm from "@/components/atoms/Services/MixMasterContactForm";
import Layout from "@/components/Layout";
import useMail from "@/hooks/use-mail";
import { Box, Button, Grid2, Stack, styled, Typography } from "@mui/material";


const MixMasterForm = () => {
    const {sendContactMail} = useMail()
    const StyledTypo = styled(Typography)(() => ({
        marginBottom: '8px'
    }))

    return (
        <>
        
        <Box sx={{background: 'black', color: 'white', padding: {xs: 2, md:'20vh'}, width: '100%', position: 'relative', zIndex: 99}}>
            <Grid2 container sx={{margin: 'auto', maxWidth: {xs: '100%', md: '80%'}}} spacing={6}>
                <Grid2 size={{xs: 12, md:6}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', }}>
                        <Typography sx={{fontSize: '42px', fontWeight: 700, lineHeight: 1, mb: 2}}>
                           Cómo preparar tus stems:
                        </Typography>
                        <StyledTypo >
                            -Mantene PRENDIDOS cada proceso que aplicaste en tus stems (EQ, compresión, FX, etc.) y tu canal master sin ningún proceso.
                        </StyledTypo>
                        <StyledTypo >
                            -Validar que no haya clipping.
                        </StyledTypo>
                        <StyledTypo >
                            -Por favor, envíanos una version pre-masterizada de tu mezcla, esto nos ayudará a guiarnos en el sonido que buscas.
                        </StyledTypo>
                        <StyledTypo mt={2} >
                            Sube tus archivos a Google Drive, WeTransfer o DropBox y envíanos el link.
                        </StyledTypo>

                        <Button variant={'outlined'} sx={{mt:2 }}  component='a' href='#contact-form'>
                            ENVÍA TUS ARCHIVOS AQUÍ
                        </Button>

                        
                    </Box>
                </Grid2>

                <Grid2  size={{xs: 12, md:6}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100%', }}>
                        <ImageElement
                            src={'/offonon/services/console.webp'}
                            alt='offonon logo'
                            loading='lazy'
                            sx={{
                                height: 'auto',
                                maxWidth: {xs: '150px', md: '450px'},
                                filter: 'grayScale(100%)',
                            }}
                        />
                    </Box>
                </Grid2>
                
            </Grid2>
        </Box>

        <Box sx={{background: '#1d1923', position: 'relative', zIndex: 99, py: '20vh'}}>
            <Box sx={{maxWidth: {xs: '100%', md: '40%'}, margin: 'auto', pt: 4, px: {xs:4, md: 0    } }} id='contact-form'>

                <MixMasterContactForm submitAction={sendContactMail}  />
            </Box>
            <Box sx={{margin: 'auto', width: 'fit-content', textAlign: 'center'}}>
                <Typography>Entrega de material a los 10 días de haber hecho el pago.</Typography>
                <Typography>2 revisiones incluidas.</Typography>
                <Typography>Revisiones extra $300</Typography>
            </Box>
        </Box>
        </>
    )
};

export default MixMasterForm;