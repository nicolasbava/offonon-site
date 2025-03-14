import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const StyledTestimonialContainer = styled(Grid)(({ theme }) => ({
    minWidth: '300px',
    background: 'transparent' ,
    color: theme.palette.background.default,
    alignItems: 'center',
    marginInline: '3vw',
    alignContent: 'flex-start',
    maxWidth: '100vw',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '30vw',
    }
}))

const StyledImageAvatar = styled('img')(()=> ({
    width: '80px',
    height: '80px'
}))

const StyledStarIcon = styled(StarIcon)(()=> ({
    '.MuiSvgIcon-root': {
        fill: 'yellow'

    }
}))

export const TestimonialsItem = ({nombre, testimonio, imagen} : {nombre: string, testimonio: string, imagen: string}) => {
    return (

        <StyledTestimonialContainer container>
            {/* <Grid item xs={4} >
            </Grid> */}
            <Grid item xs={11} sx={{display: 'flex'}} > 
                <StyledImageAvatar src={imagen} />
                <Typography variant='h4' mb={2} ml={2}> {nombre} </Typography>
            </Grid>
            
            {/* <Grid item xs={12} py={1} >
                <StyledStarIcon />
                <StyledStarIcon />
                <StyledStarIcon />
                <StyledStarIcon />
                <StyledStarIcon />
            </Grid> */}
            
            <Grid item xs={12} pt={2} > 
                <Typography>
                    {testimonio}
                </Typography>
            </Grid>
            
        </StyledTestimonialContainer>
    )
};