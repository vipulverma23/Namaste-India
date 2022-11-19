import React from "react";
import "./styles.css";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { south } from "./Database";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import Carousel from "./Carousel";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;

const Block = styled.div`
  scroll-snap-align: start;
  background-size: cover;
  position: relative;
`;

const Item = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
  background-image: url(${(p) => p.s});
  background-color: #eac;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const About = styled.div`
  height: 100%;
  position: absolute;
  top: 50%;
  left: 6%;
  color: #fff;
  font-size: 100px;
  padding: 20px;
  color: rgb(255, 255, 255);
  font-weight: 900;

  @keyframes textShow {
    from {
      opacity: 0;
      left: -100%;
    }
    to {
      opacity: 1;
      left: 0%;
    }
  }
  animation-name: textShow;
  animation-duration: 2s;
`;

const Place = (props) => {
  const { s,d, city, att } = props;
  console.log(props);
  return (
    <Block>
      <Item s={s}>
        <Link to="/form">
          <button>Select Preferences</button>
        </Link>
        <About>{city}</About>
        <Carousel cardData={att} />
      </Item>
    </Block>
  );
};

const South = () => {
  const pageVariant = {
    initial: {
      opacity: 0,
      y: "100%",
      scale: 1.2,
    },
    in: {
      opacity: 1,
      y: "0",
      scale: 1,
    },
    out: {
      opacity: 0,
      y: "100%",
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.5,
  };

  return (
    <>
      <NavLink className="arrow up" to="/" exact>
        <ArrowUpwardRoundedIcon />
      </NavLink>
      <motion.div
        style={{ position: "absolute" }}
        variants={pageVariant}
        transition={pageTransition}
        initial="initial"
        animate="in"
        exit="out"
        className="bg south"
        id="South"
      >
        <h1 className="region southh1">South India</h1>{" "}
        <Container>
          {south.map((city, index) => (
            <Place
              key={index}
              city={city.place}
              s={city.dp}
              d={city.desc}
              att={city.attractions}
            />
          ))}
        </Container>
      </motion.div>
    </>
  );
};

export default South;
