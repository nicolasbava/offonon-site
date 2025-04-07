import React from 'react';


const StyledStack = styled(Stack)(({ theme, page = false })=>({
    alignItems:'center',
    borderRadius: '40px 40px 0 0',
    background: !page ? 'linear-gradient(to top, rgb(102, 36, 134), rgb(46, 10, 64))'  : 'transparent',
    marginTop: '-100px',
    color: theme.palette.background.default,
    paddingTop: '10vh',

}));

const Courses = () => {
    
    return (
        <StyledStack>
            

        </StyledStack>

    )
};

export default Courses