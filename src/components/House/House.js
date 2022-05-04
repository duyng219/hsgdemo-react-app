import React from "react";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const House = ({ houseType, data }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>{houseType}</p>
      <Carousel pause fade variant="dark">
        {data.map((type, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="img__area">
                <NavLink to={`/areas/house/${type.id}`}>
                  <img
                    style={{ height: 450, width: 650 }}
                    className="d-block img__area__item"
                    src={type.images[0]}
                    alt="First slide"
                  />
                </NavLink>
              </div>
              <Carousel.Caption>
                <h5 className="type__title">
                  {type.name} <span>Loại {index + 1}</span>
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <hr />
    </div>
  );
};

export default House;
