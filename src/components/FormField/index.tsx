import React, {forwardRef} from "react"
import TextField, { TextFieldProps } from "@mui/material/TextField"
import Box from "@mui/material/Box"
import InputLabel, {InputLabelProps} from "@mui/material/InputLabel"
import {styled} from "@mui/material";




const StyledInputLabel = styled(InputLabel)<InputLabelProps>(({ theme  }) => ({
    "&.MuiInputLabel-root": {
         fontWeight: "bold",
         fontSize: "12px",
          ".MuiInputLabel-asterisk": {
             color: theme.palette.error.main
          }
    },
}))

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme  }) => ({
    "&.MuiTextField-root": {
         background: "#D9D9D9",

        '& label.Mui-focused': {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
        },
        '& label': {
            color: 'theme.palette.primary.light',
            fontWeight: 'bold',
            fontSize: 18,
        },
        '& .MuiInputBase-input': {
            color: theme.palette.text.primary,
            fontSize: 16
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: 'none'
            },
            '&:hover fieldset': {
                border: 'none',
            },
            '&.Mui-focused fieldset': {
                border: 'none',
            },
        }
    },
    'input::placeholder': {
        color: "#000"
    }
}));



const FormField = forwardRef<any, TextFieldProps>(({ className, label, type, size, variant, ...props }, ref) => {
    return (
        <Box>
            {label && (
                <StyledInputLabel sx={{mb:1}} error={props.error} required={props.required} color={props.color}>
                    {label}
                </StyledInputLabel>
            )}
            <StyledTextField
                type={type}
                size={size ? size : "small"}
                variant={variant ? variant : "outlined"}
                label={undefined}
                ref={ref}
                {...props}
            />
        </Box>
    )
});



FormField.displayName = "FormField"
export default FormField
