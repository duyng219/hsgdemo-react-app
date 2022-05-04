import React from "react";
import { useSelector } from "react-redux";

import AnimatedRoutes from "./AnimatedRoutes";
import Layout from "./components/Layout";
import Loading from "./components/Loading/Loading";

const App = () => {
  const { loading } = useSelector((state) => state.loading);

  return (
    <>
      {loading && <Loading />}
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </>
  );
};

export default App;
