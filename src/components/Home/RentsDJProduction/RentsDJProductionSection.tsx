
import { Box, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";
import RentsDJProductionComponent from "./RentsDJProductionComponent";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

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
    const [isFixed, setIsFixed] = useState(false);

    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    useMotionValueEvent(scrollYProgress, "change", (val) => {
        const shouldBeFixed = val > 0.2;
        setIsFixed(shouldBeFixed);
    });

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));

    const topValue = isXs ? '3%' : '30%';
    const springConfig = {
        stiffness: 80,
        damping: 20,
        mass: 1,
    };

    const x1 = useSpring(useTransform(scrollY, [1100, 1500], [0, -650]), springConfig);
    const x1mobile = useSpring(useTransform(scrollY, [1100, 1500], [0, -650]), springConfig);
    const x2 = useSpring(useTransform(scrollY, [1100, 1500], [0, 650]), springConfig);
    const y1 = useSpring(useTransform(scrollY, [1100, 1500], [0, -650]), springConfig);
    const opacity = useSpring(useTransform(scrollY, [726, 1200, 1800], [0, 1, 0]), springConfig);
    const display = useTransform(scrollYProgress, [0, 1.5], ['block', 'none']);


    return (
        <>
            <SuperiorShadow />
            <Box sx={{ py: 44, position: 'relative', zIndex: 2, background: '#1d1923', }}>
                <Box >
                    <motion.div
                        style={{
                            position: "fixed",
                            top: isFixed ? topValue : undefined,
                            left: 0,
                            right: 0,
                            width: "100%",
                            overflow: 'hidden',
                            // display: display,
                            background: '#1d1923',
                        }}
                        ref={ref}
                    >
                        <Grid2 container spacing={{ xs: 0, md: 2 }} sx={{ paddingInline: { xs: 0, md: '8vw' }, justifyContent: 'center', }}>
                            <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <motion.div
                                    style={{
                                        opacity,
                                        display: display,
                                        x: isXs ? undefined : x1,
                                        y: isXs ? y1 : undefined,
                                    }}
                                    transition={{
                                        type: 'spring',
                                    }}
                                >
                                    <RentsDJProductionComponent src={"/offonon/dj.png"} title={'CURSOS'} />
                                </motion.div>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <motion.div
                                    style={{
                                        display: display,
                                        opacity,
                                        y: isXs ? undefined : y1,
                                        x: isXs ? x1mobile : undefined
                                    }}
                                    transition={{
                                        type: 'spring',
                                    }}
                                >
                                    <RentsDJProductionComponent src={"/offonon/produccion.png"} title={'SERVICIOS'} />
                                </motion.div>

                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <motion.div
                                    style={{
                                        display: display,
                                        opacity,
                                        x: x2
                                    }}
                                    transition={{
                                        type: 'spring',
                                    }}
                                >
                                    <RentsDJProductionComponent src={"/offonon/rentas.png"} title={'RENTA PARA TU EVENTO'} />
                                </motion.div>

                            </Grid2>
                        </Grid2>
                    </motion.div>
                </Box>
            </Box>
        </>
    )
};

export default RentsDJProductionSection;

