import React from "react";

import Stack  from "@mui/material/Stack";
import {useAppContext} from "@/context/app";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import StyledLinkText  from "@/components/Layout/Header/StyledLinkText";
import {Button,styled} from "@mui/material";

const StyledButton = styled(Button)(() => ({
    fontSize: '18px',
    paddingInline: '33px',
    fontWeight: '400',
    marginRight: '16px',
    backgroundColor: "primary.main"
}));

 const HeaderLinks: React.FC = ()=>{
 const {menu: {items}} =  useAppContext()
    return(
        <Stack direction="row" alignItems="center" sx={{a: {textDecoration: "none"}}}>
        <Stack direction={"row"} alignItems={"center"} >
            {items.map((menu, key)=>{



                return(   
                <MenuItem key={key} >
                    <Link href={menu.path} target={menu.external ? "_blank" : undefined}>
                        <StyledLinkText>{menu.label}</StyledLinkText>
                    </Link>
                </MenuItem>
                )
            })}

        </Stack>

           <Stack gap={1} direction="row" sx={{ml:1}} >
               <Link href="/inscribete">
                   <StyledButton size="small" variant="contained" >Inscribete</StyledButton>

               </Link>

               {/* <Link href="/#" >
                   <Button size="small" variant="outlined" sx={{color: "primary.light", width: "125px"}}>Contactate</Button>
               </Link> */}

           </Stack>

 </Stack>
 )
}
export default HeaderLinks