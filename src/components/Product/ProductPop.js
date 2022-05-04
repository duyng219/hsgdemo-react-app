import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllFloorBrickList } from "../../redux/slices/floorBrickSlice";

function ProductPop() {
  const dispatch = useDispatch();

  const { floorBrickList } = useSelector((state) => state.floorBrick);

  useEffect(() => {
    dispatch(getAllFloorBrickList());
  }, [dispatch]);

  return (
    <Wrapper>
      <h4 className="titlePopular">Sản phẩm phổ biến</h4>

      <Splide
        options={{
          perPage: 4,
          // arrows: false,
          // pagination: false,
          // drag: 'free',
          gap: "3rem",
        }}
      >
        {floorBrickList.map((result) => {
          return (
            <SplideSlide key={result.id}>
              <Card>
                <Link to={"/recipe/" + result.id}>
                  <p>{result.name}</p>
                  <img src={result.image} alt={result.title} />
                  <p className="priceItem">Giá: {result.price}</p>
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  .titlePopular {
    margin-bottom: 15px;
  }
`;

const Card = styled.div`
  min-height: 10rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    /* position: absolute; */
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .priceItem {
    padding: 4rem 0rem 0rem 0rem;
    font-size: 1.2rem;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default ProductPop;
