import React from 'react';
import { styled, Typography, Grid, Box } from '@mui/material';
import { CoursesItemProps } from '@/types/courses'
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
const CoursesItemContainer = styled(Grid)(() => ({
    borderRadius: '15px',
    paddingInline: '24px',
    maxHeight: '390px',
    minHeight: '375px',
    minWidth: '350px',
    height: '30vw',
    width: '27vw',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    transition: '450ms all ease',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 99,
    background: 'rgba(0,0,0,0.65)',
    overflow: 'hidden',
    paddingTop: '16px',
    '&:hover .courseItemDescription':{
        opacity: 1,
    },
    '&:hover .courseImage':{
        opacity: 1,
        filter: 'brightness(0.35)'
    },
    '&:hover .courseTitle':{
        top: 0,
    },
    '&:hover .courseDescriptionText':{
        opacity: 1
    }
}));

const CourseItemDescription = styled(Box)(()=>({
    display: 'flex',
    opacity: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'absolute',
    transition: '450ms all ease',
    margin: 'auto',
    // paddingTop: '36px',
    // paddingInline: '24px',
    width: '90%',
    height: '100%',
    overflow: 'hidden',

}));

const ImageBg = styled('img')(()=>({
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 0,
    filter: 'brightness(0.65)'
}));

const CourseTitle = styled(Typography)(({theme})=>({
    position: 'relative',
    zIndex: 55,
    top: '200px',
    transition: '250ms all ease',
    lineHeight: '1.2',
    marginBottom: '8px',
    fontSize:'min(8vw,41px)',
    // [theme.breakpoints.up('lg')]: {
    //     top: '25px'
    // }
}));

const StyledLi = styled('li')(()=>({
    fontSize: '13px'
}));

// accordion styles

const StyledAccordion = styled(Accordion)(({theme})=> ({
    minWidth: '250px',
    minHeight: '125px',
    paddingTop: '8px',
    borderRadius: '5px',
    marginBottom: '5vh',
    width: '100%',
    background: 'transparent',
    color: 'white',
    border: '1px solid white',
    [theme.breakpoints.up('md')]:{
        display: 'none'
    }
}))


const CoursesItem  = ({ titulo, resumen, descripcion, foto, fotoAlt } : CoursesItemProps ) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
    return (
        <>
            {/* MOBILE */}
            <StyledAccordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box>
                        <Typography variant="body1" color="text.secondary" sx={{fontWeight: '600', fontSize: '22px', marginBottom: '4px', color:'white'}}>
                            { titulo }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{fontSize: 'min(4vw,15px)', color:'white'}}>
                            { resumen }
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <ul  >
                        {descripcion?.map( (ele, index) => {
                            return (
                                <StyledLi key={index}>{ ele }</StyledLi>
                                )
                        } )}
                    </ul>
                </AccordionDetails>
            </StyledAccordion>

            {/* DESKTOP */}
            <CoursesItemContainer item xs={12} sm={4} lg={3}  sx={{display: {xs: 'none', md: 'block'}, margin: 'auto'}} >
                    <ImageBg loading="lazy" className='courseImage' src={foto} alt={fotoAlt} title={fotoAlt}  height='420' width='373'  />
                    <CourseTitle className='courseTitle' >
                        { titulo }
                    </CourseTitle>
                    <CourseItemDescription className='courseItemDescription'>
                        {/* <CourseDescriptionTitle className='courseDescriptionTitle' variant='h4' fontSize='24px' > { titulo } </CourseDescriptionTitle> */}
                        {/* <CourseDescriptionText className='courseDescriptionText' > */}
                            <Typography variant='body1'>
                            { resumen }
                            </Typography>
                            <ul  >
                                {descripcion?.map( (ele, index)=> {
                                    return (
                                        <StyledLi key={index}>{ ele }</StyledLi>
                                        )
                                } )}
                            </ul>
                        {/* </CourseDescriptionText> */}
                    </CourseItemDescription>
            </CoursesItemContainer>
        </>
    )
};

export default CoursesItem