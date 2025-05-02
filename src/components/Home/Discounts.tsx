'use client'
import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Logo = styled("img")(() => ({
    maxWidth: "250px",
    maxHeight: "250px",
}));

const Discounts = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });


    const blur = useTransform(scrollYProgress, [0, 0.44, 1.5], ['blur(4px)', 'blur(0px)', 'blur(4px)']);


    return (
        <Box >

            <motion.div
                ref={ref}
                // initial={{ width: 0 }}
                // animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 2, ease: 'easeInOut' }}
                style={{
                    filter: blur,
                    // position: position,
                    top: '10%',
                    marginTop: '-2px',
                    width: '100%'
                }}
            >
                <Box ref={ref} sx={{ paddingInline:{xs: 8, md: 12}, margin: 'auto', textAlign: 'center', paddingBlock: 44, top: 0, zIndex: 99, background: '#1d1923' }}>
                    <Typography sx={{ fontSize: {xs: '18px', md:'24px'}, mb: 2 }}>También contamos con descuentos en las siguientes marcas:</Typography>
                    <Typography sx={{ fontSize:{xs: '28px', md: '32px',  lg:'46px'}, fontWeight: '600' }}>Adam | Novation | Scarlett | Ableton</Typography>
                </Box>
            </motion.div>
        </Box>
    )
};

export default Discounts;