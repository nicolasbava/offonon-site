import { Box, Divider, Grid2, Typography } from "@mui/material";
import { styled, ZIndex } from "@mui/material/styles";
import RentsDJProductionComponent from "./RentsDJProductionComponent";
import { motion } from 'framer-motion';

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
        zIndex: 199
    }
}))

const RentsDJProductionSection = () => {

    return (
        <>
            <SuperiorShadow />
            <Box sx={{ my: 42 }}>

                <Grid2 container spacing={{ xs: 4, md: 2 }} sx={{ marginTop: 8, paddingInline: { xs: 0, md: '8vw' }, justifyContent: 'center' }}>
                    <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ position: 'relative', top: '150px', opacity: 0 }}
                            whileInView={{ position: 'relative', top: '0px', opacity: 1 }}
                            transition={{ duration: 2 }}
                            exit={{opacity: '   '}}
                        >
                            <RentsDJProductionComponent src={"/offonon/dj.png"} title={'DJ'} />
                        </motion.div>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ position: 'relative', top: '150px', opacity: 0 }}
                            whileInView={{ position: 'relative', top: '0px', opacity: 1 }}
                            transition={{ delay: 1, duration: 2, }}
                        >
                            <RentsDJProductionComponent src={"/offonon/produccion.png"} title={'PRODUCCIÓN'} />
                        </motion.div>

                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ position: 'relative', top: '150px', opacity: 0 }}
                            whileInView={{ position: 'relative', top: '0px', opacity: 1 }}
                            transition={{ delay: 2, duration: 2, }}
                        >
                            <RentsDJProductionComponent src={"/offonon/rentas.png"} title={'RENTAS'} />
                        </motion.div>

                    </Grid2>
                </Grid2>
            </Box>

        </>
    )
};

export default RentsDJProductionSection;