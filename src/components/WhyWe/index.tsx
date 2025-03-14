import React from 'react';
import { Stack, styled, Grid, Typography } from '@mui/material'
import { RevealUp } from '../Reveal';

const StyledContainer = styled(Stack)(({theme})=>({
    display: 'none',
    background: theme.palette.primary.dark,
    color: theme.palette.background.default,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: '20vh',
    borderRadius: '70px 70px 0 0', 
    marginTop: '-50px',
    [theme.breakpoints.up('md')]:{
        display: 'flex'

    }
}));

const RoundedImage = styled('img')(()=>({
    // borderRadius: '50%',
    paddingBottom: '36px'
}));

export const WhyWe = () => {
    return (
        <StyledContainer>
            <RevealUp>
                <Typography variant="h2" textAlign='center' pb={8} fontWeight='bold' sx={{paddingBlock: '10vh'}}>Porqué elegirnos</Typography>
            </RevealUp>
                <Grid container sx={{justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
                    <Grid item xs={12} sm={3} sx={{alignItems:'center' ,display: 'flex', flexDirection: 'column'}}>
                        <RoundedImage src="/we1.png" alt="Una persona feliz recibiendo su titulo profesional"   />
                        <Typography variant='h5' textAlign='center'>
                            Certificado nacional e internacional
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}  sx={{alignItems:'center' ,display: 'flex', flexDirection: 'column'}}>
                        <RoundedImage src="/we2.png" alt="Foto de un celular"  style={{margin: 'auto'}} />
                        <Typography variant='h5' textAlign='center'>
                            Pasantías
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}  sx={{alignItems:'center' ,display: 'flex', flexDirection: 'column'}}>
                        <RoundedImage src="/we3.png" alt="Foto de un apretón de manos" style={{margin: 'auto'}} />
                        <Typography variant='h5' textAlign='center'>
                            Rápida salida laboral
                        </Typography>
                    </Grid>
                </Grid>
        </StyledContainer>        
    )
}