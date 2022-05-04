import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import convertVND from "../../utils/settings/convertVND";

function Product({ data, title, viewMore }) {
  return (
    <div>
      <Wrapper>
        <div className="boxTitleProduct">
          <h5>{title}</h5>
          <h6 className="viewMore">
            <a href="/">
              Xem thêm...<i class="bx bx-chevron-right-circle"></i>
            </a>
          </h6>
        </div>
        <Splide
          options={{
            perPage: 6,
            arrows: true,
            gap: "5rem",
          }}
        >
          {data.map((result) => {
            return (
              <SplideSlide className="SplideSile" key={result.id}>
                <Box>
                  <Link to={"/recipe/" + result.id}>
                    <Card>
                      <img src={result.image} alt={result.title} />
                    </Card>
                    <CardItem>
                      <p className="titleItem">{result.name}</p>
                      <p className="priceItem">
                        Giá: {convertVND(result.price)}
                      </p>
                    </CardItem>
                  </Link>
                </Box>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  .SplideSile {
    padding: 0px 8px;
  }
  .boxTitleProduct {
    display: inline-flex;
    padding-bottom: 15px;
  }
  .viewMore {
    position: absolute;
    right: 0;
    padding: 0rem 11rem;
    font-weight: 400;
    color: #8c110a;
  }
`;

const Box = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Card = styled.div`
  min-height: 10rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 90%;
    height: 90%;
    padding-left: 22px;
    object-fit: cover;
  }
`;

const CardItem = styled.div`
  p {
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0px 5px 5px 5px;
    height: 45px;
  }
  .titleItem {
    margin-bottom: 15px;
  }
  .rateItem {
    font-size: 18px;
    padding: 0px 0px 4px 37px;
  }
  .priceItem {
    color: #333;
    font-weight: 500;
    padding-bottom: 2rem;
  }
`;

export default Product;
