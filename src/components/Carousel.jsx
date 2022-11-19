import React from 'react'
import "./styles.css";

const Carousel = ({ cardData }) => {
  return (
    <div className="carousel">
      {cardData.map((card) => {
        return (
          <div
            className="box"
            style={{
              backgroundImage: `url(${card.dp})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 id="title">{card.attraction}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
