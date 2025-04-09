import { Box, Button, Divider, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Logo = styled("img")(() => ({
  width: '100vw'
}));

const FinalBanner = () => {

  return (
    <Box sx={{ background: '#060606', position: 'relative', zIndex: 99 }}>
      <Box
        sx={{
          height: '60vh',
          backgroundImage: 'url(/offonon/finalbanner-studio.png)', 
          backgroundAttachment: 'fixed', 
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: { xs: 'cove', md: 'contain' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
        }}
      >
      </Box>
    </Box>
  )
};

export default FinalBanner;