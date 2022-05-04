import React from "react";

import { Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Location from "./Location";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <Route
      render={(props) => (
        <div>
          <Header {...props} />
          <div className="container">
            <div className="main">{children}</div>
          </div>
          {!location.pathname.includes("/admin") &&
            !location.pathname.includes("/auth") &&
            !location.pathname.includes("/product") &&
            !location.pathname.includes("/areas") && <Location />}
          <Footer />
        </div>
      )}
    />
  );
};

export default Layout;
