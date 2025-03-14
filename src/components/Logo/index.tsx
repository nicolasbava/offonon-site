import React, {forwardRef} from "react";
import Image, {ImageProps} from "next/image";
import { styled } from '@mui/material'

const MobileImage = styled(Image)(({theme})=>({
    display: 'block',
    [theme.breakpoints.up('md')]:{
        display: 'none'
    }
}));

const DesktopImage = styled(Image)(({theme})=>({
    display: 'none',
    [theme.breakpoints.up('md')]:{
        display: 'block'
    }
}));

const Logo = forwardRef<any, Omit<ImageProps, "src">>((props, ref)=>
        <Image ref={ref} src={"/Logo-t-2.png"} {...props} alt="Logotipo de empresa que dice Pierre" />
    )
Logo.displayName = "Logo";

export const LogoFooter = forwardRef<any, Omit<ImageProps, "src">>((props, ref)=> {
    return (
        <>
            <MobileImage ref={ref} src={"/Logo-t-2.png"} {...props} alt="Logotipo de empresa Pierre" />
            <DesktopImage ref={ref} src={"/Logo-c-2.png"} {...props} alt="Logotipo de empresa Pierre" />
        </>
    )
}
    )
LogoFooter.displayName = "LogoFooter";


export default Logo
