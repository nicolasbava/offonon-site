import React from "react";
import EventosItem from "../EventosItem";
import { Box, Grid } from "@mui/material";
import { useFirebaseData } from "@/hooks/use-firebase-data"
// import { EventosItemProps } from "@/types/events";

// const itemData = [
//   {
//     img: "/1.jpg",
//     title: "Salida dia lucha contra el c...",
//   },
//   {
//     img: "/2.jpg",
//     title: "Donaciones en facultad de...",
//   },
//   {
//     img: "/3.jpg",
//     title: "Maratón solidario",
//   },
//   {
//     img: "/4.png",
//     title: "Masterclass de heladería",
//   },
//   {
//     img: "/5.png",
//     title: "Donación de cabello",
//   },
//   {
//     img: "/6.jpg",
//     title: "Acto de colación 2023",
//   },
// ];

const Eventos = () => {

  const DATA = useFirebaseData();

  return (
    <Box
      sx={{
        display: "flex",
        color: "black",
        position: "relative",
        justifyContent: "center",
        overflow: "hidden",
        background: {
          xs: "none",
          sm: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(84,18,107,0.95) 5%, rgba(84,18,107,1) 9%, rgba(84,18,107,0.6278886554621849) 100%)",
        },
      }}>
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "transparent" ,
          bottom: 0,
          height: "85%",
          borderTopLeftRadius: { xs: 25, sm: 0 },
          borderTopRightRadius: { xs: 25, sm: 0 },
          width: "100%",
          zIndex: -1,
        }}></Box>
      <Grid
        sx={{
          flexGrow: 1,
          maxWidth: "1200px",
          padding: { xs: "0px 25px 10px 25px", sm: "10px" },
          overflowX: { xs: "auto" },
          flexWrap: { xs: "nowrap", sm: "wrap" },
          gap: { xs: 1, sm: 2 },
          alignItems: 'center',
          justifyContent: {xs:'flex-start', sm: 'center'}
        }}
        container
        spacing={2}
      >
        {DATA.eventosData != null && DATA.eventosData['_value'] &&
            JSON.parse(DATA.eventosData['_value'] ).map((ele , index ) => {
                return (
                  <Grid
                  item
                  sm={5}
                  xs={12}
                  key={index + "blog"}
                  sx={{ width: { xs: "100%", sm: "100%" } }}>
                    
                    <EventosItem {...ele} />
                  </Grid>
            )
        } )
        }
        {/* {itemData.map((ele, index) => (
          <Grid
            item
            sm={6}
            xs={12}
            key={index}
            sx={{ width: { xs: "100%", sm: "100%" } }}>
            <EventosItem titulo={ele.title} foto={ele.img} />
          </Grid>
        ))} */}
      </Grid>
    </Box>
  );
};



export default Eventos;
