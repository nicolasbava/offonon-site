import { Box, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";
import RentsDJProductionComponent from "./RentsDJProductionComponent";
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";

const ImagesComponent = styled("img")(({ theme }) => ({
    maxWidth: "250px",
    [theme.breakpoints.up('md')]: {
        maxWidth: "380px",
    }
}));

export const SuperiorShadow = styled(Box)(() => ({
    position: 'relative',
    zIndex: 199,
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '-220px',
        left: '0',
        width: '100%',
        height: '220px',
        background: 'linear-gradient(to top, #1d1923 0%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 299
    }
}))

const RentsDJProductionSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Get scroll progress of the ref element
    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });
    // const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    
    useMotionValueEvent(scrollY, 'change', (val) => {
        console.log(val)
    })
    const opacity = useTransform(scrollY, [726, 970, 1300], [0, 1, 0])

    return (
        <>
            <SuperiorShadow />
            <Box sx={{ py: 42, position: 'relative', zIndex: 2, background: '#1d1923' }}>
                <Box >

                    <Grid2 container spacing={{ xs: 4, md: 2 }} sx={{ marginTop: 8, paddingInline: { xs: 0, md: '8vw' }, justifyContent: 'center' }}>
                        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                style={{
                                    opacity
                                }}
                            >
                                <RentsDJProductionComponent src={"/offonon/dj.png"} title={'DJ'} />
                            </motion.div>
                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                style={{
                                    opacity
                                }}
                            >
                                <RentsDJProductionComponent src={"/offonon/produccion.png"} title={'PRODUCCIÓN'} />
                            </motion.div>

                        </Grid2>
                        <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <motion.div
                                style={{
                                    opacity
                                }}
                            >
                                <RentsDJProductionComponent src={"/offonon/rentas.png"} title={'RENTAS'} />
                            </motion.div>

                        </Grid2>
                    </Grid2>
                </Box>
            </Box>
        </>
    )
};

export default RentsDJProductionSection;