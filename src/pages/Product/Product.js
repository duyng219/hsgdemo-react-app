import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../../components/Product/Product";
import ProductPop from "../../components/Product/ProductPop";

//Get Data Ngoai That
import { getAllDoorList } from "../../redux/slices/doorSlice";
import { getAllInteriorBrickList } from "../../redux/slices/interiorBrickSlice";

//Get Data Noi That
import { getAllLavaboList } from "../../redux/slices/lavaboSlice";
import { getAllToiletList } from "../../redux/slices/toiletSlice";
import { getAllShowerList } from "../../redux/slices/showerSlice";
import { getAllSwitchList } from "../../redux/slices/switchSlice";
import { getAllLedLightList } from "../../redux/slices/ledLightSlice";
import { getAllSheetList } from "../../redux/slices/sheetSlice";
import { getAllInteriorPaintList } from "../../redux/slices/interiorPaintSlice";
import { getAllFloorBrickList } from "../../redux/slices/floorBrickSlice";
import { getAllConstructionSteelList } from "../../redux/slices/constructionSteelSlice";
import { getAllPlasticPipeList } from "../../redux/slices/plasticPipeSlice";
import { getAllPurlinList } from "../../redux/slices/purlinSlice";
import { getAllSteelPipeList } from "../../redux/slices/steelPipeSlice";
import { getAllSinkList } from "../../redux/slices/sinkSlice";
import { getAllWaterHeaterList } from "../../redux/slices/waterHeaterSlice";
import { getAllPaintList } from "../../redux/slices/paintSlice";

const ProductPage = () => {
  const dispatch = useDispatch();

  //Data NGOAI THAT
  const { doorList } = useSelector((state) => state.door);
  const { interiorBrickList } = useSelector((state) => state.interiorBrick);
  const { sheetList } = useSelector((state) => state.sheet);
  const { interiorPaintList } = useSelector((state) => state.interiorPaint);
  const { floorBrickList } = useSelector((state) => state.floorBrick);
  const { constructionSteelList } = useSelector(
    (state) => state.constructionSteel
  );
  const { plasticPipeList } = useSelector((state) => state.plasticPipe);
  const { purlinList } = useSelector((state) => state.purlin);
  const { steelPipeList } = useSelector((state) => state.steelPipe);
  const { sinkList } = useSelector((state) => state.sink);
  const { waterHeaterList } = useSelector((state) => state.waterHeater);
  const { paintList } = useSelector((state) => state.paint);

  //Data NOI THAT
  const { lavaboList } = useSelector((state) => state.lavabo);
  const { toiletList } = useSelector((state) => state.toilet);
  const { showerList } = useSelector((state) => state.shower);
  const { switchList } = useSelector((state) => state.switch);
  const { ledLightList } = useSelector((state) => state.ledLight);

  useEffect(() => {
    dispatch(getAllDoorList());
    dispatch(getAllInteriorBrickList());
    dispatch(getAllLavaboList());
    dispatch(getAllToiletList());
    dispatch(getAllShowerList());
    dispatch(getAllSwitchList());
    dispatch(getAllLedLightList());
    dispatch(getAllSheetList());
    dispatch(getAllInteriorPaintList());
    dispatch(getAllFloorBrickList());
    dispatch(getAllConstructionSteelList());
    dispatch(getAllPlasticPipeList());
    dispatch(getAllPurlinList());
    dispatch(getAllSteelPipeList());
    dispatch(getAllSinkList());
    dispatch(getAllWaterHeaterList());
    dispatch(getAllPaintList());
  }, [dispatch]);

  return (
    <div>
      <ProductPop />
      <hr />
      <h3>Vật tư ngoại thất</h3>
      <hr />
      <Product data={doorList} title="Cửa cuốn" />
      <Product data={lavaboList} title="Chậu lavabo" />
      <Product data={sheetList} title="Tôn" />
      <Product data={interiorPaintList} title="Sơn ngoại thất" />
      <Product data={interiorBrickList} title="Gạch" />
      <Product data={constructionSteelList} title="Thép hình" />
      <Product data={plasticPipeList} title="Ống nhựa" />
      <Product data={purlinList} title="Xà gồ" />
      <Product data={steelPipeList} title="Thép hộp" />
      <hr />
      <h3>Vật tư nội thất</h3>
      <hr />
      <Product data={floorBrickList} title="Gạch" />
      <Product data={toiletList} title="Toilet" />
      <Product data={showerList} title="Sen tắm" />
      <Product data={switchList} title="Công tắc" />
      <Product data={ledLightList} title="Đèn" />
      <Product data={sinkList} title="Bồn nước" />
      <Product data={waterHeaterList} title="Máy nước nóng" />
      <Product data={paintList} title="Sơn nước nội thất" />
    </div>
  );
};

export default ProductPage;
