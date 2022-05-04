import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productReducer from "./slices/productSlice";
import doorReducer from "./slices/doorSlice";
import lavaboReducer from "./slices/lavaboSlice";
import ledLightReducer from "./slices/ledLightSlice";
import toiletReducer from "./slices/toiletSlice";
import switchReducer from "./slices/switchSlice";
import constructionSteelReducer from "./slices/constructionSteelSlice";
import floorBrickReducer from "./slices/floorBrickSlice";
import interiorBrickReducer from "./slices/interiorBrickSlice";
import interiorPaintReducer from "./slices/interiorPaintSlice";
import paintReducer from "./slices/paintSlice";
import typeOfProductReducer from "./slices/typeOfProductSlice";
import houseReducer from "./slices/houseSlice";
import plasticPipeReducer from "./slices/plasticPipeSlice";
import purlinReducer from "./slices/purlinSlice";
import sheetReducer from "./slices/sheetSlice";
import showerReducer from "./slices/showerSlice";
import steelPipeReducer from "./slices/steelPipeSlice";
import waterHeaterReducer from "./slices/waterHeaterSlice";
import sinkReducer from "./slices/sinkSlice";

import loadingReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    door: doorReducer,
    lavabo: lavaboReducer,
    ledLight: ledLightReducer,
    toilet: toiletReducer,
    switch: switchReducer,
    constructionSteel: constructionSteelReducer,
    floorBrick: floorBrickReducer,
    interiorBrick: interiorBrickReducer,
    interiorPaint: interiorPaintReducer,
    paint: paintReducer,
    typeOfProduct: typeOfProductReducer,
    house: houseReducer,
    plasticPipe: plasticPipeReducer,
    purlin: purlinReducer,
    sheet: sheetReducer,
    shower: showerReducer,
    steelPipe: steelPipeReducer,
    waterHeater: waterHeaterReducer,
    sink: sinkReducer,

    loading: loadingReducer,
  },
});
