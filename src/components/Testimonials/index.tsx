import React from 'react';
import { TestimonialsItem } from '../TestimonialsItem';
import { styled, Stack, Typography, Box } from '@mui/material';
import { ImageElement } from '../Image';
import Marquee from 'react-fast-marquee';

const StyledTestimonialContainer = styled(Stack)(({theme}) => ({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: '20px',
    overflowX: 'scroll',
    // paddingInline: '5vw',
    background: theme.palette.primary.dark,
    paddingBottom: '5vh',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
        paddingInline: '0vw',

    }
}));

const StyledStack = styled(Stack)(({theme}) => ({
    background: theme.palette.primary.dark,
    marginTop: '-2px',
    paddingTop: '15vh'
}));

const StyledBox = styled(Stack)(( {theme })=> ({
    width: '200px',
    display: 'none',
    height: '280px',
    color: theme.palette.background.default,
    marginLeft: '150px',
    background: theme.palette.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '15px',
    paddingInline: '32px',
    [theme.breakpoints.up('md')]: {
        display:'flex'
    }
}));

type testimonialsArrayType = {
    nombre: string,
    testimonio: string,
    imagen: string
}[]

const testimonialsArray : testimonialsArrayType = [
    {
        nombre: 'Araceli Gonzalez',
        imagen: '/testimonio1.png',
        testimonio: 'Es fácil dictar una clase pero enseñar con tanto amor y paciencia, entregar su alma por que el siguiente sea igual o mejor que el propio profesor. Eso no tiene valor, es lo más tierno que me llevo yo para el futuro'
    },
    {
        imagen: '/testimonio2.png',
        nombre: 'Maria Estigarribia',
        testimonio: 'La verdad que fue una hermosa capacitación y a seguir por mas!! Gracias Profe, gracias por tantas enseñanzas, paz y tranquilidad con la que se vive ahi dentro, feliz de formar parte del grupo!! Gracias Pierre!!'
    },
    {
        imagen: '/testimonio3.png',
        nombre: 'Eugenia Ratto',
        testimonio: 'Una genia la profe!! Destaco mucho la paciencia y la empatía con todas!! Muchas gracias'
    },
    {
        nombre: 'Monica Baroviero',
        imagen: '/testimonio4.png',
        testimonio: 'Vuelvo pronto y repito Gracias Profe!! Por todo!! ESpero que siempre lo consideren en esta institución y en cualquier otra.. Gracias por todas sus enseñanzas. Si que se va a extrañar!!'
    }
]

export const Testimonials = () => {
    return (
        <StyledStack direction= 'row'>
            <StyledBox>
                <ImageElement src="/reviews-stars.png" alt='Nuestras reviews' />
                <Typography component='p'> Nuestras</Typography>
                <Typography component='p'> reviews</Typography>
            </StyledBox>
            <StyledTestimonialContainer>
                <Marquee pauseOnClick={true} speed={25} >
                    {testimonialsArray.map((ele, index) => {
                    return  (
                        <TestimonialsItem 
                                nombre={ele.nombre} 
                                testimonio={ele.testimonio} 
                                key={index} 
                                imagen={ele.imagen}
                            />
                                )
                    })}
                </Marquee>
            </StyledTestimonialContainer>    
        </StyledStack>
    )
};