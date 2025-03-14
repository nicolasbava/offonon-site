import React, {forwardRef} from 'react';
import {AppBarProps} from '@mui/material/AppBar';
import Slide from '@mui/material/Slide';
import Link from 'next/link';

import Logo from "@/components/Logo";
import StyledAppBar from "@/components/Layout/Header/StyledAppBar";
import Stack from "@mui/material/Stack";
import HeaderLinks from "@/components/Layout/Header/HeaderLinks";
import HeaderLinksMobile from "@/components/Layout/Header/HeaderLinksMobile";
import {useScrollTrigger, styled} from "@mui/material";


type HideOnScrollProps = {
    window?: () => Window;
    children: any;
}

const HideOnScroll: React.FC<HideOnScrollProps> = ({children, window}: HideOnScrollProps) => {

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger} >
            {children}
        </Slide>
    );
};

const StyledLogo = styled(Link)(()=>({
    
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    marginRight: 'auto',
}))

const Header = forwardRef<any, Omit<AppBarProps, "position">>((props, ref) => {
    return (
        <HideOnScroll>
            <StyledAppBar ref={ref} position="sticky" {...props} >
                
                <StyledLogo href='/'>
                    <Logo style={{width: '100%', minWidth: '120px', height: 'auto', maxWidth: '162px', marginTop: '-4px'}} alt="Pierre Logo" height={90} width={80}/>
                </StyledLogo>
                <Stack sx={{ml: {xs: 2, md: 4, lg: 16}, display: {xs: "none", md: "flex"}}}>
                    <HeaderLinks/>
                </Stack>
                <Stack direction="row" justifyContent="flex-end" sx={{width: "100%", display: {xs: "flex", md: "none"}}}>
                    <HeaderLinksMobile/>
                </Stack>
            </StyledAppBar>
        </HideOnScroll>)
})

Header.displayName = "Header";

export default Header;
