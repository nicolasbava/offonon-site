import React from "react";
import { Button, ButtonProps, styled, useMediaQuery } from "@mui/material";

import TextField from "@mui/material/TextField";
import { Box, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useTheme } from "@mui/material/styles";
import sgMail from '@sendgrid/mail';

const WorkForm = ({ titulo }: { titulo: string }) => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  const SendButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    backgroundColor: "#2F2F2F",
    "&:hover": {
      backgroundColor: "#2F2F2F",
    },
    borderRadius: "25px",
    width: "auto",
    fontSize: "18px",
    fontWeight: "400",
    padding: "4px 24px",
  }));

  const BlackTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#79747E",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#79747E",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#79747E",
      },
    },
  });


  const CvButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "black",
    borderColor: "#333333",
    borderRadius: "8px",
    width: "auto",
    fontSize: "14px",
    fontWeight: "400",
    padding: "6px 12px",
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    background: theme.palette.primary.light,
    color: theme.palette.secondary.dark,
  }));

  return (
    <Box>
      {matchDownMd ? (
        <Typography
          sx={{ fontWeight: "600", fontSize: "26px", margin: "10px 0" }}>
          Formulario
        </Typography>
      ) : (
        <Typography
          sx={{ fontWeight: "600", fontSize: "45px", margin: "10px 0" }}>
          Ingresa tu formulario
        </Typography>
      )}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        noValidate
        autoComplete="off">
        <FormControl
          sx={{
            flexGrow: 1,
          }}>
          <BlackTextField
            id="outlined-basic"
            label="Nombre"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </FormControl>
        <FormControl
          sx={{
            flexGrow: 1,
          }}>
          <BlackTextField
            id="outlined-basic"
            label="Apellido"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </FormControl>

        <FormControl
          sx={{
            flexGrow: 1,
          }}>
          <BlackTextField
            id="outlined-basic"
            label="Correo electrónico"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </FormControl>
        <FormControl
          sx={{
            flexGrow: 1,
          }}>
          <BlackTextField
            id="outlined-basic"
            label="Teléfono/Cel"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </FormControl>

        <FormControl
          sx={{
            flexGrow: 1,
          }}>
          <BlackTextField
            id="outlined-basic"
            // fullWidth
            label="Provincia"
            variant="outlined"
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl
          sx={{
            flexGrow: 1,
          }}>
          <BlackTextField
            id="outlined-basic"
            // fullWidth
            label="Área / curso de interés"
            variant="outlined"
            type="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <FormControl>
          <BlackTextField
            id="outlined-basic"
            label="Deja tu consulta"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            multiline
            rows={7}
          />
        </FormControl>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <CvButton variant="outlined" startIcon={<AttachFileIcon />}>
            Adjunta tu CV
          </CvButton>
          <SendButton variant="contained">Botón</SendButton>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkForm;
