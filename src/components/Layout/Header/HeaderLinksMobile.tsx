import React from "react";

import Stack from "@mui/material/Stack";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import {useAppContext} from "@/context/app";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import {Button, Drawer, DrawerProps, styled} from "@mui/material";
import Divider from "@mui/material/Divider";
import StyledLinkText from "@/components/Layout/Header/StyledLinkText";


const StyledMenuDrawer = styled(Drawer)<DrawerProps & { special?: boolean }>(({theme}) => ({
    "&.MuiDrawer-root": {
        ".MuiDrawer-paper": {
            padding: "16px",
            minWidth: "156px",
            background: theme.palette.primary.dark,
            opacity: "0.9",
            color: "#fff"
        },

        a: {textDecoration: "none"},
        textAlign: 'right'
    },
}));

const StyledButton = styled(Button)(() => ({
    fontSize: '18px',
    paddingInline: '33px',
    marginTop: '8px',
    fontWeight: '400',
    marginRight: '16px',
    backgroundColor: "primary.main"
}));

const HeaderLinksMobile: React.FC = () => {
    const {menu: {items, open}, toggleMenu} = useAppContext()
    return (
        <>
        <MenuIcon fontSize="large" sx={{color: "#fff", cursor: 'pointer'}} onClick={() => toggleMenu(true)}/>

        <StyledMenuDrawer sx={{p: 2}} anchor="right" open={open} onClose={() => toggleMenu(false)}>
            <Stack>
                <Stack direction="row" justifyContent="flex-end">
                    <CloseIcon fontSize="large" sx={{cursor: 'pointer'}} onClick={() => toggleMenu(false)}/>

                </Stack>
                <Divider sx={{background: "#fff", my: 2}}/>
                <Stack>
                    {
                        items.map((menu, key) => {
                            return (<Link key={key} href={menu.path} target={menu.external ? "_blank" : undefined}>
                                    <MenuItem>
                                        <StyledLinkText>{menu.label}</StyledLinkText>
                                    </MenuItem>
                                </Link>
                            )
                        })
                    }
                {/* <Link href="/inscribete">
                   <StyledButton size="small" variant="contained" >Inscribete</StyledButton>
               </Link> */}
                </Stack>



               
            </Stack>

        </StyledMenuDrawer>
    </>)
}
    export default HeaderLinksMobile