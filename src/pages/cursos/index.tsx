import React from 'react';
import { BgImage, StyledTitle, StyledTitleContainer } from '@/components/Hero';
import PageContainer from '@/components/PageContainer';
import Courses from "@/components/Courses";
import { Typography, useTheme, useMediaQuery, styled } from '@mui/material';

const StyledPageContainer = styled(PageContainer)(({theme}) => ({
    paddingBottom: '10vh',
    // background: 'red'
}))

const CoursesPage = () => {
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <StyledPageContainer title={"Cursos"} >
            <BgImage src={matchDownMd ? '/Cursos-mobile.png' : '/Cursos-web.png' } style={{top: '0px'}} height='auto' width='auto' alt='alt1' loading='lazy' />
            <StyledTitleContainer>
                <Typography variant='h2' sx={{ fontSize: 'min(8vw, 50px)', fontWeight: 'bold', color: 'white' }}>Nuestros Cursos</Typography>
                <Typography variant="h4" sx={{color: 'white', fontSize: 'min(4vw,32px)'}}>#SumateAPierre</Typography>
            </StyledTitleContainer>
            
            <Courses page={true} displayWrap={true}  />

        
        </StyledPageContainer>
    )
};

export default CoursesPage