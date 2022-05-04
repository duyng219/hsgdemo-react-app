import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../src/assets/images/logo-starglobal3d.svg";
import history from "../history";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
    subMenu: [],
  },
  {
    display: "Về chúng tôi",
    path: "/about",
    subMenu: [],
  },
  {
    display: "Khu vực",
    path: "/areas/northern",
    subMenu: [
      {
        display: "Miền Bắc",
        path: "/areas/northern",
      },
      {
        display: "Miền Trung",
        path: "/areas/central",
      },
      {
        display: "Miền Nam",
        path: "/areas/south",
      },
    ],
  },
  {
    display: "Sản phẩm",
    path: "/product",
    subMenu: [],
  },
  {
    display: "Liên hệ",
    path: "/contact",
    subMenu: [],
  },
];

const Header = () => {
  const userInfo = JSON.parse(localStorage.getItem("hoasen-user-logged"));

  const handleLogout = async () => {
    await localStorage.removeItem("hoasen-user-logged");
    history.push("/");
  };

  const [iconLogo, setIconLogo] = useState(logo);

  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 60 ||
        document.documentElement.scrollTop > 60
      ) {
        headerRef.current.classList.add("shrink");

        // setIconLogo(logo2);
      } else {
        headerRef.current.classList.remove("shrink");
        // setIconLogo(logo);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={iconLogo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                  <ul className="__itemmenu">
                    {item.subMenu.map((itemsub, index) => (
                      <Link to={itemsub.path}>
                        <li
                          className={`header__menu__item header__menu__left__item __submenu `}
                          key={index}
                        >
                          <div className="submenuItem">{itemsub.display}</div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              {/* <i className="bx bx-search"></i> */}
            </div>
            <div className="header__menu__item header__menu__right__item">
              {!userInfo && (
                <Link to="/auth/login">
                  <button className="btn btn-login">Log In</button>
                </Link>
              )}
              {!userInfo && (
                <Link to="/auth/register">
                  <button className="btn btn-signup">Sign up</button>
                </Link>
              )}
              {userInfo && (
                <button onClick={handleLogout} className="btn btn-signup">
                  Log out
                </button>
              )}
              {userInfo?.user?.isAdmin && (
                <Link to="/admin">
                  <button className="btn btn-signup">Admin</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
