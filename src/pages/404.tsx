import PageContainer from "@/components/PageContainer";
import { Stack, Typography, styled } from "@mui/material";

const StyledStack = styled(Stack)(({ theme })=> ({
    background: "#F5F5F5",
    color: theme.palette.secondary.main,
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    position: 'relative',
    marginTop: '-10vh',
    [theme.breakpoints.up('md')]: {
        marginTop: '0',
    }
}));

const StyledImage1 = styled('img')(({theme})=>({
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '0',
    minWidth: '70px',
    display: 'none',
    maxWidth: '300px',
    [theme.breakpoints.up('md')]: {
        display: 'block',
    }
}));

const StyledImage2 = styled('img')(({theme})=>({
    position: 'absolute',
    right: '0px',
    top: '0px',
    zIndex: '0',
    width: '50%',
    display: 'none',
    maxWidth: '300px',
    [theme.breakpoints.up('md')]: {
        display: 'block',
    }
}));

const StyledImage3 = styled('img')(({theme})=>({
    position: 'absolute',
    zIndex: '0',
    left: '0px',
    bottom: '0px',
    width: '50%',
    display: 'none',
    maxWidth: '300px',
    [theme.breakpoints.up('md')]: {
        display: 'block',
    }
}));

const StyledImage4 = styled('img')(({theme})=>({
    position: 'absolute',
    bottom: '0px',
    zIndex: '0',
    width: '50%',
    maxWidth: '300px',
    [theme.breakpoints.up('md')]: {
        right: '0px',
    }
}));

const StyledWarningImage = styled('img')(({theme})=> ({
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    maxWidth: '300px',
    [theme.breakpoints.up('md')]: {
        maxWidth: '550px',
    }
}));



export default function Custom404() {
    return (
        <PageContainer title="404">
            <StyledStack>
                <Typography variant="h3" sx={{marginBottom: 0}}>ERROR</Typography>
                <Typography sx={{fontSize: 'min(35vw ,150px)', fontWeight: 'bold', lineHeight: 1}} >404</Typography>
                <Typography variant="h5">Página no encontrada</Typography>
                
            </StyledStack   >
        </PageContainer>
        )
  }