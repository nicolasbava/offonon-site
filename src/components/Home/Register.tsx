'use client'
import { Box, Button, Divider, Grid2, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const Logo = styled("img")(() => ({
    maxWidth: "250px",
    maxHeight: "250px",
}));

const RegisterSection = () => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        console.log('Submitted:', text);
        // You can add more logic here
    };
    return (
        <Box sx={{ paddingInline:{xs: 4, md: 12}, margin: 'auto', textAlign: 'center', paddingTop: 22, paddingBottom: 22, position: 'relative', zIndex: 99, background: '#1d1923' }}>
            <Typography sx={{ fontSize: { xs: '32px', md: '38px' }, fontWeight: 'bold' }}>Regístrate para más información</Typography>
            <Box
                sx={{
                    background: 'linear-gradient(to bottom, #f736ff 30%, #008dc7 80%)',
                    p: '2px', // padding to show the border
                    borderRadius: '8px',
                    mx: 'auto',
                    mt: 4,
                    width: '100%',
                    maxWidth: 500,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        gap: 2,
                        backgroundColor: '#1d1923',
                        borderRadius: '6px',
                        width: '100%',
                        pr: 1
                    }}
                >

                    <TextField
                        fullWidth
                        // label="Enter something"
                        placeholder='Ingresa tu mail aquí...'
                        variant="outlined"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        sx={{
                            color: 'white',
                            // '& .MuiOutlinedInput-root': {
                                '& input': {
                                    color: 'white',
                                    fontWeight: 'bold',
                                    padding: '12px',
                                    // any other styles
                                },
                            // }
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none'
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        size="large"
                        onClick={handleSubmit}
                        sx={{
                            background: 'linear-gradient(to right, #f736ff 30%, #008dc7 80%)',
                            paddingInline: 8,
                        }}
                    >
                        Enviar
                    </Button>
                </Box>
            </Box>
        </Box>
    )
};

export default RegisterSection;