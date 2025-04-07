import { createTheme, responsiveFontSizes } from "@mui/material"


const theme = createTheme({
    typography: {
        button: {
            textTransform: "none",
        },
        fontFamily: "Montserrat"
    },
    palette: {
        mode: "light",

        primary: { // violetas - greens - verdes
            main: "#6F008B",
            light: "#94FF7A",
            dark: "#43035B",
        },
        secondary: { // blue - azul
            main: "#303287",
            dark: "#15163B",
            light: "#5A5CC4",
        },
        error: { // rojo
            main: "#E9132D",
            light: "#E9132D40",
            dark: "#A91123",
        },
        text: { // oscuro a mas claro
            primary: "#333333",
            secondary: "#141414",
            disabled: "#999999",
        },

        background: {
            default: "#fff",
        },
    },


    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 980,
            lg: 1200,
            xl: 1536,
        },
    },

    components: {
        
    }

 

})
export default responsiveFontSizes(theme)
