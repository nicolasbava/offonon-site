import { Box, Divider, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ImagesComponent = styled("img")(({theme}) => ({
    maxWidth: "250px",
    [theme.breakpoints.up('lg')]: {
        maxWidth: "150px",
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: "381px",
    }
}));


const RentsDJProductionComponent = ({src,title, link}: {src: string, title: string, link: string}) => {

    return (
        <>
        <Box 
            href={link}
            component='a'
            className='ImageRentsDJProductionComponent' 
            sx={{
                position: 'relative', 
                cursor: 'pointer', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white'
            }}>
            <ImagesComponent
                src={src}
                alt="alt1"
                loading="lazy"
                sx={{
                    height: "auto",
                    margin: "auto",
                    transition: '250ms all ease',
                    filter: 'brightness(0.2)',
                    '.ImageRentsDJProductionComponent:hover &': {    
                        filter: 'brightness(1)'
                    },
                    borderRadius: '84px',
                    objectFit: 'cover',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                    my: {xs: 2, md: 4}
                }}
                
            />
            <Typography sx={{
                position: 'absolute',
                textAlign: 'center',
                // top: '39%',
                fontSize: {xs: '20px', lg: '32px'},
                fontWeight: 'bold',
                left: '0px',
                right: '0px',
                marginTop: '-12px',
                // top: '32%',
                // bottom: 0,
                // transform: 'translateY(50%)',
                textShadow: '2px 2px 0px black',
                transition: '250ms all ease',
            }}>{title}</Typography>
        </Box>
        </>
    )
};

export default RentsDJProductionComponent;