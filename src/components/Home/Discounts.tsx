import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Logo = styled("img")(() => ({
  maxWidth: "250px",
  maxHeight: "250px",
}));

const Discounts = () => {
    
    return (
        <Box sx={{maxWidth: '80%', margin: 'auto', textAlign: 'center', paddingBlock: 4, position: 'relative', zIndex: 99, background: '#1d1923'}}>
            <Typography sx={{fontSize: '24px',}}>También contamos con descuentos en las siguientes marcas:</Typography>
            <Typography sx={{fontSize: '46px', fontWeight: '600'}}>Adam | Novation | Scarlett | Ableton</Typography>
        </Box>
    )
};

export default Discounts;