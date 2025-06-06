import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BgImage = styled('img')(({ theme })=>({
    height: '110vh',
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    top: '-100px',  
    [theme.breakpoints.up('sm')]: {
      height: '118vh',
      position: 'fixed',
    }
  }));

export const StyledTitleContainer = styled(Box)(()=>({
  width: '100%',  
  paddingTop: '10vh',
  // position: 'fixed',
  zIndex: 1,
}));

export  const StyledTitle = styled(Typography)(({ theme })=>({
    color: 'white',
    position: 'sticky',
    width: '75%',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%'
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '30%'
    }
  }))