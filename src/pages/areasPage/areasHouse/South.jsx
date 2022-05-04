import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import House from "../../../components/House/House";
import { getAllHouseList } from "../../../redux/slices/houseSlice";

const Northern = () => {
  const { houseList } = useSelector((state) => state.house);
  const houseData = houseList.filter((item) => item.region === "Miền Nam");

  const lv4House = houseData.filter((house) => house.name === "Nhà Cấp 4");
  const townhouse = houseData.filter((house) => house.name === "Nhà Phố");
  const villa = houseData.filter((house) => house.name === "Biệt thự");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHouseList());
  }, [dispatch]);

  return (
    <motion.div
      className="type"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ textAlign: "center", fontSize: 40 }}>Khu vực miền Nam</div>
      <House houseType="Nhà cấp 4" data={lv4House} />
      <House houseType="Nhà phố" data={townhouse} />
      <House houseType="Biệt thự" data={villa} />
    </motion.div>
  );
};

export default Northern;
