import React from "react";
import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import PageContainer from "@/components/PageContainer";
import Eventos from "@/components/Eventos";
import ImageList from "@mui/material/ImageList";
import { useTheme } from "@mui/material/styles";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import { StyledTitleContainer } from "@/components/Hero";

const BgImage = styled("img")(({ theme }) => ({
  position: "fixed",
  zIndex: -1,
  top: "0",
}));

const Section2 = styled(Box)(({ theme }) => ({
  paddingInline: "10vw",
  textAlign: "center",
  color: theme.palette.background.default,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: "white",
  position: "sticky",
  width: "75%",
  fontSize: "min(20vw,72px)",
  fontWeight: 500,
}));


const itemData = [
  {
    img: "/grid1.png",
    title: "Pierre cursos foto cortando el pelo",
    rows: 2,
    cols: 1,
  },
  {
    img: "/grid4.png",
    title: "Burger",
    rows: 1,
    cols: 1,
  },
  {
    img: "/grid5.png",
    title: "Camera",
    rows: 1,
    cols: 1,
  },
  {
    img: "/grid2.png",
    title: "Coffee",
    rows: 2,
    cols: 2,
  },
  {
    img: "/Rectangle 12377.jpg",
    title: "Hats",
    rows: 1,
    cols: 1,
  },
  {
    img: "/grid6.png",
    title: "Honey",
    author: "@arwinneil",
    rows: 1,
    cols: 2,
  },
  {
    img: "/grid3.png",
    title: "Basketball",
    rows: 2,
    cols: 1,
  },
  {
    img: "/Rectangle 12380.jpg",
    title: "Fern",
    rows: 1,
    cols: 1,
  },
  {
    img: "/Rectangle 12382.jpg",
    title: "Mushrooms",
    rows: 1,
    cols: 1,
  },
  {
    img: "/Rectangle 12381.jpg",
    title: "Tomato basil",
    rows: 1,
    cols: 3,
  },
];

const Events = () => {
  const [selectedTile, setSelectedTile] = React.useState<any>(null);

  const handleClickOpen = (tile: any) => {
    setSelectedTile(tile);
  };

  const handleClose = () => {
    setSelectedTile(null);
  };

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer title={"Inicio"}>
      <BgImage
        src={ matchDownMd ? "/Eventos-mobile.png" : "/Eventos-web.png"}
        height="auto"
        width="auto"
        alt="alt1"
        loading="lazy"
        sx={{
          height: { xs: "100%", sm: "100%" },
          minWidth: { xs: "100%" },
        }}
      />
      {matchDownMd ? (
        <Box
          sx={{
            marginBottom: "60px",
            marginTop: "60px",
            textAlign: "center",
          }}>
          <Typography
            sx={{ fontSize: "36px", fontWeight: "600", color: "white" }}>
            Eventos
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: "300",
              color: "white",
            }}
            align="center">
            Cientos de jujeños
            <Box component="span" sx={{ fontWeight: "600" }}>
            {' '}confían{' '}
            </Box>
            en nosotros
          </Typography>
        </Box>
      ) : (
        <Box>
          <StyledTitleContainer>
            <StyledTitle variant='h2' sx={{ fontSize: 82, fontWeight: 'bold' }}>Nuestros eventos</StyledTitle>
            <Typography variant="h4" sx={{color: 'white'}}>Cientos de jujeños confían en nosotros</Typography>

          </StyledTitleContainer>
          <Box sx={{ paddingTop: "39vh" }}>
            <Section2
              sx={{
                background:
                  "linear-gradient(0deg, rgba(84,18,107,0.6278886554621849) 14%, rgba(84,18,107,0.6306897759103641) 72%, rgba(255,255,255,0) 100%)",
                paddingBottom: "20vh",
              }}>
              <Typography
                sx={{
                  fontSize: 43,
                  fontWeight: "200",
                }}
                align="center">
                “Queremos dejar una huella impulsando el empleo y emprendedurismo en nuestra comunidad de San Salvador de Jujuy a través de educación de calidad con tres pilares fundamentales exigencia, innovación y ética profesional. También tenemos un compromiso solidario y profesional con la comunidad Nuestros alumnos, docentes y egresados participan de diversas jornadas con impacto social sin fines de lucro”
              </Typography>
            </Section2>
          </Box>
        </Box>
      )}

      <Eventos />

      {matchDownMd ? (
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "black",
            backgroundColor: "white",
            padding: "20px 20px 10px 20px",
            marginBottom: '-1px'
          }}
          align="center">
          “Queremos dejar una huella impulsando el empleo y emprendedurismo en nuestra comunidad de San Salvador de Jujuy a traves de educación de calidad con tres pilares fundamentales exigencia, innovación y ética profesional. También tenemos un compromiso solidario y profesional con la comunidad Nuestros alumnos, docentes y egresados participan de diversas jornadas con impacto social sin fines de lucro”
        </Typography>
      ) : null}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: '10vh',  
          background: {
            xs: "white",
            sm: "none",
          },
        }}>
        <ImageList
          sx={{
            maxWidth: "1200px",
            width: "100%",
            padding: { xs: "0px 10px", sm: "26px" },
            gap: { xs: "6px", sm: "22px" },
          }}
          variant="quilted"
          cols={3}
          gap={matchDownMd ? 6 : 22}
          rowHeight={"auto"}>
          {itemData.map((item, index) => (
            <ImageListItem
              onClick={() => handleClickOpen(item)}
              sx={{
                borderRadius: { sm: "22px", xs: "8px" },
                overflow: "hidden",
              }}
              key={index}
              value={index}
              cols={item.cols || 1}
              rows={item.rows || 1}>
              <img
                {...srcset(item.img, 200, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Dialog
        fullWidth={true}
        PaperProps={{
          style: { borderRadius: matchDownMd ? "8px" : "30px" },
        }}
        open={selectedTile !== null}
        onClose={handleClose}>
        {selectedTile !== null ? (
          <img src={selectedTile.img} alt={selectedTile.title} loading="lazy" />
        ) : null}
      </Dialog>
    </PageContainer>
  );
};

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default Events;
