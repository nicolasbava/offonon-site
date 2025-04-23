'use client'
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { DividerStyled } from "../Common";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import TextAnimation from "../Animations/TextAnimations";
import { useTheme } from "@mui/material/styles";

const QuienesSomos = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));


    const { scrollYProgress, scrollY } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });


    const blur = useTransform(scrollYProgress, [0, 0.44, 1.5], ['blur(4px)', 'blur(0px)', 'blur(4px)',]);
    const zIndex = useTransform(scrollY, [0, 2500], [99, -19]);

    return (

        <motion.div
            ref={containerRef}
            style={{
                position: 'sticky',
                top: isXs? "10%" : '30%',
                // zIndex
                filter: blur
            }}
        >

            <Box sx={{
                paddingInline: '32px',
                paddingBottom: '32px',
                marginTop: 44,
                marginBottom: 74,
                background: '#1d1923',
                color: 'white',
                overflow: 'hidden',
                position: 'relative',
                zIndex: zIndex
            }} >
                <Stack sx={{ maxWidth: { xs: '100%', md: '75%' }, margin: 'auto' }}>
                    <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                        <Typography sx={{ fontSize: { xs: '28px', md: '43px' }, fontWeight: 'bold', minWidth: { xs: '250px', sm: '320px', md: '400px' }, width: 'max-content' }}>
                            ¿Quiénes somos?
                        </Typography>
                            <DividerStyled />
                    </Stack>

                    <Box>
                        <TextAnimation text={"Similique sit est et laborum adipisci fuga aliquam, error officiis eligendi deleniti impedit fugiat commodi molestiae ipsa laboriosam minima totam blanditiis ea! Obcaecati accusantium quae quaerat voluptatum neque sequi a./n                        Cupiditate sunt animi earum quasi, quaerat vero error nobis vel ipsam autem vitae fuga ex sed debitis et porro deserunt inventore. Temporibus labore similique nisi ullam dignissimos. Atque, optio id./n                        Est obcaecati commodi sapiente. Qui tenetur rem sunt quam, blanditiis officiis magnam cum culpa numquam nulla non possimus natus quos voluptate recusandae alias ipsam itaque error? Atque nulla a esse."} />
                        <TextAnimation text={"Similique sit est et laborum adipisci fuga aliquam, error officiis eligendi deleniti impedit fugiat commodi molestiae ipsa laboriosam minima totam blanditiis ea! Obcaecati accusantium quae quaerat voluptatum neque sequi a./n                        Cupiditate sunt animi earum quasi, quaerat vero error nobis vel ipsam autem vitae fuga ex sed debitis et porro deserunt inventore. Temporibus labore similique nisi ullam dignissimos. Atque, optio id./n                        Est obcaecati commodi sapiente. Qui tenetur rem sunt quam, blanditiis officiis magnam cum culpa numquam nulla non possimus natus quos voluptate recusandae alias ipsam itaque error? Atque nulla a esse."} />

                    </Box>

                </Stack>
            </Box>
        </motion.div>

    )
};

export default QuienesSomos;