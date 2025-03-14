import { styled, Typography, Box } from '@mui/material';

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

export const StyledTitleContainer = styled(Box)(({ theme })=>({
  marginLeft: '12vw',
  height: '100vh',
  // paddingBottom: '0vh',
  width: '100%',  
  paddingTop: '10vh',
  // [theme.breakpoints.up('sm')]: {
  //   marginTop: '28vh', 
  //   marginBottom: '20vh', 
    
  // }
}));

export  const StyledTitle = styled(Typography)(({theme})=>({
    color: 'white',
    position: 'sticky',
    width: '75%',
    // fontSize: 'min(19vw,4px)',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%'
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '30%'
    }
  }))