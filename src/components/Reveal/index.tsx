import React from "react"
import Reveal from "react-awesome-reveal";
import {keyframes} from "@emotion/react";
import {styled} from "@mui/material";
import Box, {BoxProps} from "@mui/material/Box";


const RevealContainer = styled(Box)<BoxProps>(() => ({
    "&.MuiBox-root": {
        overflow: "hidden",
        width: "auto",
        height: "auto",
        transition: "max-height 1s, max-width 1s",
    },
}))

const customAnimationLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const customAnimationRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const customAnimationUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customAnimationDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


type RevealProps = {
    children: React.ReactNode
    duration?: number,
}

const defaultDuration = 1000;
export const RevealLeft: React.FC<RevealProps> = ({children, duration = defaultDuration}) => {
    return (<RevealContainer>
        <Reveal duration={duration} triggerOnce keyframes={customAnimationLeft}>{children}</Reveal>
    </RevealContainer>)
}

export const RevealRight: React.FC<RevealProps> = ({ children, duration = defaultDuration }) => {
    return (
        <RevealContainer>
            <Reveal duration={duration} triggerOnce keyframes={customAnimationRight}>{children}</Reveal>
        </RevealContainer>)
}

export const RevealUp: React.FC<RevealProps> = ({children, duration = defaultDuration}) => {
    return (
        <RevealContainer>
            <Reveal duration={duration} triggerOnce keyframes={customAnimationUp}>{children}</Reveal>
        </RevealContainer>)
}

export const RevealDown: React.FC<RevealProps> = ({children, duration = defaultDuration}) => {
    return (
        <RevealContainer>
            <Reveal duration={duration} triggerOnce keyframes={customAnimationDown}>{children}</Reveal>
        </RevealContainer>)

}