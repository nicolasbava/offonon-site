'use client'
import { Box, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DividerStyled } from "../Common/index.tsx";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from "react";
import TextAnimation from "../Animations/TextAnimations";
const Logo = styled("img")(() => ({
    maxWidth: "250px",
    maxHeight: "250px",
}));

const QuienesSomos = () => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <Box sx={{
            paddingInline: '32px',
            paddingBlock: '32px',
            background: '#1d1923',
            color: 'white',
            marginTop: 4,
            overflow: 'hidden'
        }} >
            <Stack sx={{ maxWidth: { xs: '100%', md: '75%' }, margin: 'auto' }}>
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <motion.div
                        ref={ref}
                        initial={{ width: 0 }}
                        style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.5, duration: 2, ease: 'easeInOut' }}
                    >
                        <Typography sx={{ fontSize: '43px', fontWeight: 'bold', minWidth: { xs: 'auto', md: '400px' } }}>
                            ¿Quiénes somos?
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        ref={ref}
                        style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                        animate={{ width: '100%', opacity: 1 }}
                        transition={{ delay: 1, duration: 2, ease: 'easeInOut' }}
                    >
                        <DividerStyled />
                    </motion.div>
                </Stack>

                <Box>
                    <TextAnimation text={"Similique sit est et laborum adipisci fuga aliquam, error officiis eligendi deleniti impedit fugiat commodi molestiae ipsa laboriosam minima totam blanditiis ea! Obcaecati accusantium quae quaerat voluptatum neque sequi a./n                        Cupiditate sunt animi earum quasi, quaerat vero error nobis vel ipsam autem vitae fuga ex sed debitis et porro deserunt inventore. Temporibus labore similique nisi ullam dignissimos. Atque, optio id./n                        Est obcaecati commodi sapiente. Qui tenetur rem sunt quam, blanditiis officiis magnam cum culpa numquam nulla non possimus natus quos voluptate recusandae alias ipsam itaque error? Atque nulla a esse."} />

                    <TextAnimation text={"Similique sit est et laborum adipisci fuga aliquam, error officiis eligendi deleniti impedit fugiat commodi molestiae ipsa laboriosam minima totam blanditiis ea! Obcaecati accusantium quae quaerat voluptatum neque sequi a./n                        Cupiditate sunt animi earum quasi, quaerat vero error nobis vel ipsam autem vitae fuga ex sed debitis et porro deserunt inventore. Temporibus labore similique nisi ullam dignissimos. Atque, optio id./n                        Est obcaecati commodi sapiente. Qui tenetur rem sunt quam, blanditiis officiis magnam cum culpa numquam nulla non possimus natus quos voluptate recusandae alias ipsam itaque error? Atque nulla a esse."} />

                </Box>
            </Stack>
        </Box>
    )
};

export default QuienesSomos;