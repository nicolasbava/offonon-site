import React from 'react';
import CoursesItem from '../CoursesItem';
import { Typography, Stack, styled, Grid, Box } from '@mui/material';
import { RevealUp } from '../Reveal';
import { useFirebaseData } from '@/hooks/use-firebase-data';


const StyledStack = styled(Stack)(({ theme, page = false })=>({
    alignItems:'center',
    borderRadius: '40px 40px 0 0',
    background: !page ? 'linear-gradient(to top, rgb(102, 36, 134), rgb(46, 10, 64))'  : 'transparent',
    marginTop: '-100px',
    color: theme.palette.background.default,
    paddingTop: '10vh',

}));

const CoursesContainer = styled(Grid)(({ theme, displayWrap = false, page })=>({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    display: 'flex',
    flexWrap: displayWrap ? 'wrap' : 'nowrap',
    overflowX: 'scroll',
    background: page ? 'linear-gradient(180deg, rgba(67,3,91,0.0287289915966386) 0%, rgba(67,3,91,0.8715861344537815) 5%, rgba(67,3,91,1) 8%)' : 'transparent',
    [theme.breakpoints.up('md')]: {
        flexWrap: 'wrap',
        paddingBottom: '10vw',
        overflow: 'hidden',
        justifyContent: 'center',
        // maxWidth: '90%',
        // background:  page ? 'linear-gradient(180deg, rgba(67,3,91,0.0287289915966386) 0%, rgba(67,3,91,0.8715861344537815) 5%, rgba(67,3,91,1) 8%)' : 'transparent'
        background:  !page ? 'linear-gradient(180deg, rgba(67,3,91,0.0287289915966386) 0%, rgba(67,3,91,0.8715861344537815) 5%, rgba(67,3,91,1) 8%)' : 'transparent'
    }
}));


const Courses = ({page = false, displayWrap = false }  ) => {
    const DATA = useFirebaseData();
    
    return (
        <StyledStack page={page} >
            {!page ? 
                <RevealUp>
                    <Typography variant="h2"  pt={4} fontWeight={700} pb={'10vh'}>Cursos</Typography> 
                </RevealUp>
             : null
            }
                <CoursesContainer container rowGap={1} columnGap={0} page={true} displayWrap={displayWrap}   >
                    {DATA.cursosData != null && DATA.cursosData['_value'] ?
                    JSON.parse(DATA.cursosData['_value']).map( (ele , index ) => {

                            return (
                                <Box key={index} m={2} mb={0} sx={{width: {xs:'100%', md:'auto'} }}>
                                    <CoursesItem {...ele} />
                                </Box>
                            )
                        } )
                   : undefined }
                </CoursesContainer>
        </StyledStack>

    )
};

export default Courses