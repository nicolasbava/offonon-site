import AppBar, {AppBarProps} from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";

// const changeColor = () => {
    
//     if(typeof window == undefined){
//         return '#fff'
//     } else if (window && window.scrollY >= 90) { 
//         'linear-gradient(118.7deg, rgba(255, 255, 255, 0.4) 27.4%, rgba(255, 255, 255, 0.1) 71.52%)'
//     }
// }


const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    "&.MuiAppBar-root": {
        // background: 'transparent',
        width: "100%",
        height: "80px",
        display:"flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: 'space-between',
        color: theme.palette.background.default,
        background: 'transparent',
        backdropFilter: 'blur(40px)',
        position: 'fixed'
    },
}));




export default StyledAppBar