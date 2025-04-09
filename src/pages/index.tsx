"use client";

import { useEffect } from "react";
import { Box, Grid2, useMediaQuery } from "@mui/material";
import { StyledTitle, StyledTitleContainer } from "../components/Hero";
import { styled, useTheme } from "@mui/material/styles";

const Logo = styled("img")(() => ({
  maxWidth: "250px",
  maxHeight: "250px",
}));

export default function HomePage() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scriptId = "calendly-widget-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: "url('/offonon/offonon-pic.jpeg')",
        backgroundPosition: "center",
        height: '140vh',
      }}
    >
      <StyledTitleContainer>
        <Grid2 container spacing={0} sx={{alignItems: 'center', justifyContent: 'center'}}>
          {/* Title Section */}
          <Grid2 size={{xs: 12, md: 8}}>
              <StyledTitle variant="h2">OFFONON</StyledTitle>
              <StyledTitle variant="h4" sx={{ fontWeight: "normal" }}>
                Studio
              </StyledTitle>
          </Grid2>

          {/* Logo Section */}
          <Grid2 size={{xs: 12, md: 2}}>
            <Logo
              src={"/offonon/offonon-logo2.png"}
              alt="alt1"
              loading="lazy"
              sx={{
                height: "auto",
                width: { xs: "150px", md: "150px" },
                display: { xs: "none", md: "block" },
              }}
            />
          </Grid2>

          {/* Calendly Embed */}
          <Grid2 size={{xs: 10}} sx={{justifyContent: 'flex-start'}}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/nicobava96/agenda-aqui"
              style={{ minWidth: "320px", height: "800px" }}
            ></div>
          </Grid2>
        </Grid2>
      </StyledTitleContainer>

    </Box>
  );
}