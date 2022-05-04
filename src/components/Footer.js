import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../../src/assets/logo-starglobal.png";

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Map 3D/360",
    path: "/about",
  },
  {
    display: "Demo",
    path: "/about",
  },
  {
    display: "Liên Hệ :  (+84) 28 2253 1695 (+84) 944 850 527",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Điều khoản sử dụng",
    path: "/about",
  },
  {
    display: "Chính sách bảo mật",
    path: "/about",
  },
  {
    display: "Bảo hành kỹ thuật",
    path: "/about",
  },
  {
    display: "Hỗ trợ kỹ thuật",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">
              CÔNG TY CP GIẢI PHÁP CHUYÊN GIA STAR GLOBAL
            </div>
            <div className="footer__content">
              <p>
                <i className="bx bx-home"></i>
                <a href="/">Số 04, Đường N8, Khu Phố 2, Phường Phú Hữu, Thành phố Thủ Đức,
                Thành phố Hồ Chí Minh</a>
              </p>
              <p>
                <i className="bx bx-location-plus"></i>
                <a href="/">Phòng 209 – Toà nhà SCS, Đường D1, Khu Công nghệ cao, Thành phố
                Thủ Đức, Thành phố Hồ Chí Minh</a>
              </p>
              <p>
                <i className="bx bx-location-plus"></i>
                <a href="/">Số 25, Ngõ 50, Đường Trung Yên, Phường Yên Hoà, Quận Cầu Giấy,
                Thành phố Hà Nội</a>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">About</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              <a href="/"><i className="bx bxl-facebook"></i></a>
              <a href="/"><i className="bx bxl-instagram"></i></a>
              <a href="/"><i className="bx bxl-flickr-square"></i></a>
              <a href="/"><i className="bx bxl-linkedin"></i></a>
              <a href="/"><i className="bx bxl-pinterest"></i></a>
              <a href="/"><i className="bx bxl-youtube"></i></a>
            </p>
            <p>
              Luôn mang đến sự hài lòng cao nhất cho khách hàng một cách kịp
              thời để đảm bảo hiệu quả tối đa và giúp khách hàng của chúng tôi
              đạt được các mục tiêu kinh doanh của họ bằng cách đưa ra các giải
              pháp phần mềm với công nghệ tiên tiến và ưu việt nhất
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
