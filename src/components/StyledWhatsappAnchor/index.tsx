import { styled } from '@mui/material'
import React from 'react'
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ElementWhatsappAnchor = styled(WhatsAppIcon)(({theme}) => ({
    position: 'fixed',
    bottom: '16px',
    fill: 'white',
    right: '3vw',
    zIndex: '999',
    fontSize: 'min(15vw, 55px)',
    transition: '250ms all ease',
    '&:hover': {
        transform: 'scale(1.25)',
        opacity: "0.6"
    },
    [theme.breakpoints.up('sm')]:{
        right: '16px',

    }
}))

const StyledWhatsappAnchor: React.FC = () => {
    return (
        <Link href="https://api.whatsapp.com/send/?phone=5493884778611&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                {/* <ElementWhatsappAnchor src={""}  alt="whatsapp" width="48" height="48"/> */}
                <ElementWhatsappAnchor />
        </Link>
    )
}

export default StyledWhatsappAnchor