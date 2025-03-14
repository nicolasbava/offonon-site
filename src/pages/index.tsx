import { Box, Grid2, useMediaQuery } from "@mui/material";
import { RevealUp } from "../components/Reveal";
import { StyledTitle, StyledTitleContainer } from '../components/Hero'
import { styled, useTheme } from "@mui/material/styles";

const Logo = styled("img")(({ theme }) => ({
  maxWidth: '250px',
  maxHeight: '250px'
})); 



export default function HomePage() {
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  // console.log('matchDownMd', matchDownMd)
  

  return (
    <>
    
    <Box sx={{ backgroundImage: "url('/offonon/offonon-pic.jpeg')", backgroundPosition: 'center', overflow: 'hidden' }} >

          <StyledTitleContainer >
            <Grid2 container spacing={2}>
              <Grid2 size={{xs: 12, md: 6}}>
                <RevealUp>
                  <StyledTitle variant='h2'>
                    OFFONON
                  </StyledTitle>
                  <StyledTitle variant='h4' sx={{fontWeight: 'normal'}}>
                    Próximamente 
                  </StyledTitle>
                </RevealUp>
              </Grid2>
              <Grid2 size={{xs: 12, md: 6}}>
                <Logo
                  src={"/offonon/offonon-logo2.png"}
                  height="auto"
                  width="auto"
                  alt="alt1"
                  loading="lazy"
                  sx={{
                    height: { xs: "auto", md: "auto" },
                    width: { xs: "150px", md: "150px" },
                    // marginLeft: 'auto',
                    display: {xs: 'none', md: 'block'},
                    //   minWidth: { xs: "100%" },
                  }}
                />
              </Grid2>
             
            </Grid2>
          </StyledTitleContainer>

        

    </Box>
    </>
  );
}
