'use client'

import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledTitleContainer } from "../Hero";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
const Logo = styled("img")(({ theme }) => ({
  maxWidth: "250px",
  maxHeight: "250px",
  [theme.breakpoints.up('md')]: {
    maxWidth: "381px",
  }
}));

const Hero = () => {

  const ref = useRef<HTMLDivElement>(null);

  // Get scroll progress of the ref element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], 
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  return (  
    <>
      <Box
        sx={{
          backgroundImage: "url('/offonon/offonon-pic-cortada.png')",
          backgroundPosition: "center",
          backgroundSize: 'cover',
          height: '120vh',
          backgroundAttachment: 'fixed',
          paddingTop: '12vh'
        }}
      >
        <StyledTitleContainer>
          <Stack sx={{ display: 'flex', alignItems: 'center',position: 'fixed', right: 0, left: 0  }}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{opacity: 0}}
              style={{
              // x: translateX,
                opacity: opacity
              }}
            >
              <Logo
                src={"/offonon/offonon-logo2.png"}
                alt="alt1"
                loading="lazy"
                sx={{
                  height: "auto",
                  width: { xs: "150px", md: "550px" },
                  // display: { xs: "none", md: "block" },
                }}
              />
            </motion.div>
            <Box sx={{ width: { xs: '80%', md: '60%' }, textAlign: 'center',}} >
              <motion.div
                initial={{ position: 'relative', top: '150px', opacity: 0 }}
                whileInView={{ position: 'relative', top: '0px', opacity: 1 }}
                transition={{delay: 0.1, duration: 0.5}}
                style={{
                  opacity: opacity
                }}
              >
                <Typography sx={{
                  color: 'white', textTransform: 'uppercase', marginTop: 4, fontSize: { xs: '23px', md: '32px' },
                  textShadow: '3px 2px 3px black', fontWeight: '600', position: 'relative', zIndex: 1, overflow: 'hidden'
                }}>
                  Dedicados a despertar el talento en grandes artistas y productores.
                </Typography>
              </motion.div>
            </Box>
          </Stack>

        </StyledTitleContainer>

      </Box>
    </>
  )
};

export default Hero;