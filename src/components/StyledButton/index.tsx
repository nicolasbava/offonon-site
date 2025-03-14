import {Button, ButtonProps, styled} from "@mui/material";

const StyledButton = styled(Button)<ButtonProps>(({theme}) => ({
    "&.MuiButton-root": {
        background: theme.palette.primary.dark,
        fontWeight: "bold",
        color: "#fff",
        borderRadius: "32px",
        marginTop: '16px',
        paddingInline: '1.4em',
        paddingBlock: '0.6em',
        fontSize: 'min(4.3vw, 20px)',
        transition: '250ms all ease'
    },

    '&:hover': {
        background: theme.palette.primary.main,
        boxShadow: '2px 2px 2px rgba(0,0,0,0.2)'
    },

    "&.MuiButton-contained.Mui-disabled": {
        background: theme.palette.text.disabled,
    }
}))

export default StyledButton