import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Stack, styled, useMediaQuery } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ImageElement = styled("img")(() => ({}));
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { EventsItemProps } from "@/types/events";
import Link from "next/link";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const EventosItem = ({ titulo, foto, descripcion, fotoAlt }: EventsItemProps ) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box >
      {!matchDownMd ? (
        <Card
          sx={{
            width: "100%",
            borderRadius: "9px",
            padding: 0,
          }}>
          <CardContent sx={{ padding: 0 }}>
            <ImageElement
              sx={{
                maxHeight: '220px',
                width: "100%",
                objectFit: 'cover',
              }}
              src={foto}
              height="auto"
              width="auto"
              alt={fotoAlt}
              loading="lazy"
            />
            <Typography
              sx={{ fontSize: 'min(3vw,32px)', padding: "0px 20px", minHeight: '96px', fontWeight: '600', lineHeight: '1.3', pb:2 }}
              color="text.primary"
              gutterBottom>
              {titulo}
            </Typography>
            {/* <Typography
              variant="body2"
              sx={{ padding: "0px 20px", fontSize: 22 }}
            >
              {descripcion}
            </Typography> */}
          </CardContent>
          <CardActions>
            <Link href="https://api.whatsapp.com/send/?phone=5493884778611&text&type=phone_number&app_absent=0" target='_blank'>
            <Button
              size="small"
              sx={{
                backgroundColor: "#25D366",
                color: "white",
                borderRadius: 24,
                minWidth: "50%",
                height: 48,
                marginRight: "auto",
                padding: "8px 18px",
                marginBottom: '8px',
                marginLeft: '8px',
                "&:hover": {
                  backgroundColor: "#169b47"
                }
              }}>
              <Stack
                sx={{ alignItems: "center", }}
                direction="row"
                my={1}
                spacing={1}>
                <ImageElement
                  src="/logo-wsp.png"
                  alt="Logo Whatsapp"
                  width="20"
                  height="20"
                  sx={{mt: '1px'}}
                />
                <Typography sx={{ fontSize: 22 }} variant="body2">
                  Quiero participar
                </Typography>
              </Stack>
            </Button>
            </Link>
          </CardActions>
        </Card>
      ) : (
        <Card
          sx={{
            width: "80vw",
            borderRadius: "9px",
            padding: 0,
          }}>
          <CardContent sx={{ padding: 0 }}>
            <ImageElement
              sx={{
                maxHeight: 170,
                width: "100%",
              }}
              src={foto}
              height="auto"
              width="auto"
              alt={fotoAlt}
              loading="lazy"
            />
            <Typography
              sx={{ fontSize: 22, padding: "0px 10px", minHeight: '66px' }}
              color="text.primary"
              gutterBottom>
              {titulo}
            </Typography>
            {/* <Collapse
              in={expanded}
              timeout="auto"
              unmountOnExit
              sx={{ padding: "0 10px" }}>
              <Typography
                variant="body2"
                sx={{ padding: "0px 10px", fontSize: 12 }}>
                {descripcion}
              </Typography>
            </Collapse> */}
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              size="small"
              sx={{
                backgroundColor: "#25D366",
                color: "white",
                borderRadius: 24,
                minWidth: "auto",
                height: 38,
                marginLeft: 0,
                padding: "0px 8px",
                '&:hover': {
                  backgroundColor: '#18783b',
                }
              }}>
              <Stack
                sx={{ alignItems: "center" }}
                direction="row"
                my={1}
                spacing={1}>
                <ImageElement
                  src="/logo-wsp.png"
                  alt="Logo Whatsapp"
                  width="20"
                  height="20"
                />
                <Typography sx={{ fontSize: 12 }} variant="body2">
                  Quiero participar
                </Typography>
              </Stack>
            </Button>
            {/* <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore> */}
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default EventosItem;
