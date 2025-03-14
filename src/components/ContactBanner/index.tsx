import {Box, styled} from "@mui/material";
import {BoxProps} from "@mui/material/Box";

const ContactBanner = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.secondary.dark,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        minHeight: "150px",
        color: "#fff"
    },
}))

export default ContactBanner