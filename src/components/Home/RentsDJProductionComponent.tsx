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


const RentsDJProductionComponent = ({src,title}: {src: string, title: string}) => {

    return (
        <>
        <Box className='ImageRentsDJProductionComponent' sx={{position: 'relative', cursor: 'pointer', '&:hover': { transform: 'scale(1.02)' }, }}>
            <ImagesComponent
                src={src}
                alt="alt1"
                loading="lazy"
                sx={{
                    height: "auto",
                    margin: "auto",
                    transition: '250ms all ease',
                    '&:hover': {    
                        transform: 'scale(1.02)'
                    }
                }}
            />
            <Typography sx={{
                position: 'absolute',
                textAlign: 'center',
                top: '39%',
                fontSize: '32px',
                fontWeight: 'bold',
                left: '0px',
                right: '0px',
                textShadow: '2px 2px 0px black',
                transition: '250ms all ease',
            }}>{title}</Typography>
        </Box>
        </>
    )
};

export default RentsDJProductionComponent;