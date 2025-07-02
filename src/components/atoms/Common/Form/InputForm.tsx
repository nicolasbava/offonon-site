import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
  Typography
} from "@mui/material";
import React from "react";

const StyledErrorTypo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: '12px',
  margin: 0,
  padding: 0,
  marginTop: '-4px',
  marginBottom: '-4px',
  marginLeft: '8px'
}));

interface InputFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent) => void;
  value: string;
  name: string;
  error?: boolean | string;
  placeholder: string;
  type?: 'text' | 'select' | 'textarea';
  options?: string[];
  rows?: number; // opcional para definir altura del textarea
}




const InputForm: React.FC<InputFormProps> = ({
  handleChange,
  name,
  value,
  error,
  placeholder,
  type = 'text',
  options = [],
  rows = 4
}) => {
  const isText = type === 'text';
  const isTextarea = type === 'textarea';
  const isSelect = type === 'select';


  const handleSelectChange = (event: SelectChangeEvent) => {
    handleChange(event);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };
  return (
    <Box sx={{ gap: 2, width: '100%' }}>
      <FormControl fullWidth>
        {(isText || isTextarea) && (
          <TextField
            name={name}
            onChange={handleTextChange}
            value={value}
            required
            placeholder={placeholder}
            error={!!error}
            id={name}
            label={placeholder}
            InputLabelProps={{ shrink: true }}
            variant={isTextarea      ? 'outlined' : "standard"}
            multiline={isTextarea}
            rows={isTextarea ? rows : undefined}
            sx={{
               "& .MuiFormLabel-root": {
                color: "white",
               }, 
               "& .MuiInputBase-root::before": {
                borderBottom: '1px solid grey'
               }, 
               "& .MuiInputBase-input": {
                color: 'white'
               },
              "& label.Mui-focused": {
                color: "#e2e1e3",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#e2e1e3",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#e2e1e3",
                },
              },
              '& .MuiOutlinedInput-root.Mui-error': {
                borderColor: 'green'
              },
              mb: 1
            }}
          />
        )}

        {isSelect && (
          <Select
            name={name}
            value={value}
            onChange={handleSelectChange}
            displayEmpty
            error={!!error}
            // label={placeholder}
            inputProps={{ 'aria-label': placeholder }}
            sx={{
              mb: 1,
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#e2e1e3"
              },
              "& .MuiOutlinedInput-input": {
                border: '1px solid grey',
                color: 'grey'
              },
              "& .MuiSvgIcon-root": {
                color: 'grey'
              },
              "& .MuiSvgIcon-root .MuiSelect-icon": {
                color: 'white'
              },
                // .css-lohd6h-MuiSvgIcon-root-MuiSelect-icon
                // .css-1ll44ll-MuiOutlinedInput-
                // .css-nazmpc-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input
            }}
          >
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
      <StyledErrorTypo sx={{ visibility: error ? 'visible' : 'hidden' }} variant="subtitle2">
        {error || 'OFFONON Studios'}
      </StyledErrorTypo>


    </Box>
  );
};

export default InputForm;
