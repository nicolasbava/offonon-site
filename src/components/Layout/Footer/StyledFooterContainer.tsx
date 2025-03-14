import {styled} from "@mui/material";
import Box, {BoxProps} from "@mui/material/Box";

const StyledFooterContainer = styled(Box)<BoxProps>(({ theme }) => ({
    "&.MuiBox-root": {
        background: theme.palette.text.secondary,
        minHeight: "250px",
        width: "100%"
    },
}))
export default StyledFooterContainer