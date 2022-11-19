import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ArrowDownwardRoundedIcon from "@material-ui/icons/ArrowDownwardRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";


const VOD = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index=-1;
  height: 100vh;
  pointer-events: none;
  overflow: hidden;
  iframe {
    width: 100vw;
    height: 56.25vw;
    min-height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

const Home = () => {
  const pageVariant = {
    initial: {
      opacity: 0,
      scale: 1.2,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "spring",
    ease: "easeIn",
  };

  return (
    <>
      <NavLink className="arrow left" to="/west" exact>
        <ArrowBackRoundedIcon />
      </NavLink>
      <NavLink className="arrow right" to="/east" exact>
        <ArrowForwardRoundedIcon />
      </NavLink>
      <NavLink className="arrow up" to="/north" exact>
        <ArrowUpwardRoundedIcon />
      </NavLink>
      <NavLink className="arrow down" to="/south" exact>
        <ArrowDownwardRoundedIcon />
      </NavLink>
      <motion.div
        style={{ position: "absolute" }}
        variants={pageVariant}
        transition={pageTransition}
        initial="initial"
        animate="in"
        exit="out"
        className="bg"
        id="Home"
      >
        <h1 className="region title">Namaste Bharat</h1>
        <VOD>
          <iframe
            src="https://player.vimeo.com/video/576718655?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </VOD>
      </motion.div>
    </>
  );
};

export default Home;
