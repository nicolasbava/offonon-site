import React from "react";
import Box from "@mui/material/Box"
import Head from "next/head";
import {useAppContext} from "@/context/app";
import {Fade, useScrollTrigger, Fab} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type ScrollOnTopProps = {
    window?: () => Window;
    children: React.ReactElement;
}
const  ScrollTop:React.FC<ScrollOnTopProps> = (props: ScrollOnTopProps)=> {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#top');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
                behavior: "smooth"
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, left: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

type PageContainerProps = {
    children: React.ReactNode | Array<React.ReactNode>
    title: string
}

type PageSectionProps = Pick<PageContainerProps, "children">
export const PageSection: React.FC<PageSectionProps> = ({children}) => {

    const {px} = useAppContext()

    return (
        <Box sx={{px, width: "100%", display: "flex"}}>
            {children}
        </Box>
    )
}
const PageContainer: React.FC<PageContainerProps> = ({children, title}) => {

    const { toggleMenu } = useAppContext()

    React.useEffect(()=>{
        toggleMenu(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (<>
        <Head>
            <title>{`Pierre - ${title}`}</title>
        </Head>
        <Box sx={{minHeight: "450px", overflow: "hidden",}}>
            <div id="top" />
            {children}
        </Box>

        <ScrollTop >
            <Fab sx={{backgroundColor: "primary.dark", '&:hover': {background: 'primary.main'}}} size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon sx={{
                    color: "white", 
                    fontSize: 35, 
                    fontWeight: "bold",
                    '&:hover': {
                        color: 'primary.dark'
                    }
                    }} />
            </Fab>
        </ScrollTop>
    </>)

}

export default PageContainer
