import { Button, Image, Table, Tag } from "antd";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import error from "../../../assets/images/error.png";
import { getAllConstructionSteelList } from "../../../redux/slices/constructionSteelSlice";
import { getAllDoorList } from "../../../redux/slices/doorSlice";
import { getAllFloorBrickList } from "../../../redux/slices/floorBrickSlice";
import { getDetailHouse } from "../../../redux/slices/houseSlice";
import { getAllInteriorBrickList } from "../../../redux/slices/interiorBrickSlice";
import { getAllInteriorPaintList } from "../../../redux/slices/interiorPaintSlice";
import { getAllLavaboList } from "../../../redux/slices/lavaboSlice";
import { getAllLedLightList } from "../../../redux/slices/ledLightSlice";
import { getAllPaintList } from "../../../redux/slices/paintSlice";
import { getAllPlasticPipeList } from "../../../redux/slices/plasticPipeSlice";
import { getAllPurlinList } from "../../../redux/slices/purlinSlice";
import { getAllSheetList } from "../../../redux/slices/sheetSlice";
import { getAllShowerList } from "../../../redux/slices/showerSlice";
import { getAllSinkList } from "../../../redux/slices/sinkSlice";
import { getAllSteelPipeList } from "../../../redux/slices/steelPipeSlice";
import { getAllSwitchList } from "../../../redux/slices/switchSlice";
import { getAllToiletList } from "../../../redux/slices/toiletSlice";
import { getAllWaterHeaterList } from "../../../redux/slices/waterHeaterSlice";
import convertVND from "../../../utils/settings/convertVND";
import ExportExcel from "./ExportExcel";

const HouseDetail = () => {
  const [changeDoor, setChangeDoor] = useState();
  const [changeSheet, setChangeSheet] = useState();
  const [changeInteriorPaint, setChangeInteriorPaint] = useState();
  const [changeInteriorBrick, setChangeInteriorBrick] = useState();
  const [changeConstructionSteel, setChangeConstructionSteel] = useState();
  const [changePlasticPipe, setChangePlasticPipe] = useState();
  const [changePurlin, setChangePurlin] = useState();
  const [changeSteelPipe, setChangeSteelPipe] = useState();
  const [changePaint, setChangePaint] = useState();
  const [changeFloorBrick, setChangeFloorBrick] = useState();
  const [changeSink, setChangeSink] = useState();
  const [changeWaterHeater, setChangeWaterHeater] = useState();
  const [changeLavabo, setChangeLavabo] = useState();
  const [changeToilet, setChangeToilet] = useState();
  const [changeShower, setChangeShower] = useState();
  const [changeSwitch, setChangeSwitch] = useState();
  const [changeLedLight, setChangeLedLight] = useState();

  const [doorCount, setDoorCount] = useState(1);
  const [sheetCount, setSheetCount] = useState(1);
  const [interiorPaintCount, setInteriorPaintCount] = useState(1);
  const [interiorBrickCount, setInteriorBrickCount] = useState(1);
  const [constructionSteelCount, setConstructionSteelCount] = useState(1);
  const [plasticPipeCount, setPlasticPipeCount] = useState(1);
  const [purlinCount, setPurlinCount] = useState(1);
  const [steelPipeCount, setSteelPipeCount] = useState(1);
  const [paintCount, setPaintCount] = useState(1);
  const [floorBrickCount, setFloorBrickCount] = useState(1);
  const [sinkCount, setSinkCount] = useState(1);
  const [waterHeaterCount, setWaterHeaterCount] = useState(1);
  const [lavaboCount, setLavaboCount] = useState(1);
  const [toiletCount, setToiletCount] = useState(1);
  const [showerCount, setShowerCount] = useState(1);
  const [switchCount, setSwitchCount] = useState(1);
  const [ledLightCount, setLedLightCount] = useState(1);

  const [doorPrice, setDoorPrice] = useState(null);
  const [sheetPrice, setSheetPrice] = useState(null);
  const [interiorPaintPrice, setInteriorPaintPrice] = useState(null);
  const [interiorBrickPrice, setInteriorBrickPrice] = useState(null);
  const [constructionSteelPrice, setConstructionSteelPrice] = useState(null);
  const [plasticPipePrice, setPlasticPipePrice] = useState(null);
  const [purlinPrice, setPurlinPrice] = useState(null);
  const [steelPipePrice, setSteelPipePrice] = useState(null);

  const [paintPrice, setPaintPrice] = useState(null);
  const [floorBrickPrice, setFloorBrickPrice] = useState(null);
  const [sinkPrice, setSinkPrice] = useState(null);
  const [waterHeaterPrice, setWaterHeaterPrice] = useState(null);
  const [lavaboPrice, setLavaboPrice] = useState(null);
  const [toiletPrice, setToiletPrice] = useState(null);
  const [showerPrice, setShowerPrice] = useState(null);
  const [switchPrice, setSwitchPrice] = useState(null);
  const [ledLightPrice, setLedLightPrice] = useState(null);

  const { id } = useParams();
  const { house } = useSelector((state) => state.house);
  const { doorList } = useSelector((state) => state.door);
  const { sheetList } = useSelector((state) => state.sheet);
  const { interiorPaintList } = useSelector((state) => state.interiorPaint);
  const { interiorBrickList } = useSelector((state) => state.interiorBrick);
  const { constructionSteelList } = useSelector((state) => state.constructionSteel);
  const { plasticPipeList } = useSelector((state) => state.plasticPipe);
  const { purlinList } = useSelector((state) => state.purlin);
  const { steelPipeList } = useSelector((state) => state.steelPipe);
  const { paintList } = useSelector((state) => state.paint);
  const { floorBrickList } = useSelector((state) => state.floorBrick);
  const { sinkList } = useSelector((state) => state.sink);
  const { waterHeaterList } = useSelector((state) => state.waterHeater);
  const { lavaboList } = useSelector((state) => state.lavabo);
  const { toiletList } = useSelector((state) => state.toilet);
  const { showerList } = useSelector((state) => state.shower);
  const { switchList } = useSelector((state) => state.switch);
  const { ledLightList } = useSelector((state) => state.ledLight);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(null);

  const [changTextDoor, setChangeTextDoor] = useState(house?.door?.name);
  const [changTextSheet, setChangeTextSheet] = useState(house?.sheet?.name);
  const [changTextInteriorPaint, setChangeTextInteriorPaint] = useState(
    house?.interiorPaint?.name
  );
  const [changTextInteriorBrick, setChangeTextInteriorBrick] = useState(
    house?.interiorBrick?.name
  );
  const [changTextConstructionSteel, setChangeTextConstructionSteel] = useState(
    house?.constructionSteel?.name
  );
  const [changTextPlasticPipe, setChangeTextPlasticPipe] = useState(
    house?.plasticPipe?.name
  );
  const [changTextPurlin, setChangeTextPurlin] = useState(house?.purlin?.name);
  const [changTextSteelPipe, setChangeTextSteelPipe] = useState(
    house?.steelPipe?.name
  );
  const [changTextPaint, setChangeTextPaint] = useState(house?.paint?.name);
  const [changTextFloorBrick, setChangeTextFloorBrick] = useState(
    house?.floorBrick?.name
  );
  const [changTextSink, setChangeTextSink] = useState(house?.sink?.name);
  const [changTextWaterHeater, setChangeTextWaterHeater] = useState(
    house?.waterHeater?.name
  );
  const [changTextLavabo, setChangeTextLavabo] = useState(house?.lavabo?.name);
  const [changTextToilet, setChangeTextToilet] = useState(house?.toilet?.name);
  const [changTextShower, setChangeTextShower] = useState(house?.shower?.name);
  const [changTextSwitch, setChangeTextSwitch] = useState(house?.switch?.name);
  const [changTextLedLight, setChangeTextLedLight] = useState(
    house?.ledLight?.name
  );

  const [oneDoorPrice, setOneDoorPrice] = useState(null);
  const [oneSheetPrice, setOneSheetPrice] = useState(null);
  const [oneInteriorPaintPrice, setOneInteriorPaintPrice] = useState(null);
  const [oneInteriorBrickPrice, setOneInteriorBrickPrice] = useState(null);
  const [oneConstructionSteelPrice, setOneConstructionSteelPrice] =
    useState(null);
  const [onePlasticPipePrice, setOnePlasticPipePrice] = useState(null);
  const [onePurlinPrice, setOnePurlinPrice] = useState(null);
  const [oneSteelPipePrice, setOneSteelPipePrice] = useState(null);

  const [onePaintPrice, setOnePaintPrice] = useState(null);
  const [oneFloorBrickPrice, setOneFloorBrickPrice] = useState(null);
  const [oneSinkPrice, setOneSinkPrice] = useState(null);
  const [oneWaterHeaterPrice, setOneWaterHeaterPrice] = useState(null);
  const [oneLavaboPrice, setOneLavaboPrice] = useState(null);
  const [oneToiletPrice, setOneToiletPrice] = useState(null);
  const [oneShowerPrice, setOneShowerPrice] = useState(null);
  const [oneSwitchPrice, setOneSwitchPrice] = useState(null);
  const [oneLedLightPrice, setOneLedLightPrice] = useState(null);

  let dataExport = [
    {
      Tên: changTextDoor,
      "Đơn giá":
        oneDoorPrice === null
          ? Number(house?.door?.price).toLocaleString() + "đ"
          : Number(oneDoorPrice).toLocaleString() + "đ",
      "Số Lượng": doorCount,
      "Tổng tiền":
        doorPrice === null
          ? Number(house?.door?.price).toLocaleString() + "đ"
          : Number(doorPrice).toLocaleString() + "đ",
    },
    {
      Tên: changTextSheet,
      "Đơn giá":
        oneSheetPrice === null
          ? Number(house?.sheet?.price).toLocaleString() + "đ"
          : Number(oneSheetPrice).toLocaleString() + "đ",
      "Số Lượng": sheetCount,
      "Tổng tiền":
        sheetPrice === null
          ? Number(house?.sheet?.price).toLocaleString() + "đ"
          : Number(sheetPrice).toLocaleString() + "đ",
    },
    {
      Tên: changTextInteriorPaint,
      "Đơn giá":
        oneInteriorPaintPrice === null
          ? Number(house?.interiorPaint?.price).toLocaleString() + "đ"
          : Number(oneInteriorPaintPrice).toLocaleString() + "đ",
      "Số Lượng": interiorPaintCount,
      "Tổng tiền":
        interiorPaintPrice === null
          ? Number(house?.interiorPaint?.price).toLocaleString() + "đ"
          : Number(interiorPaintPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextInteriorBrick,
      "Đơn giá":
        oneInteriorBrickPrice === null
          ? Number(house?.interiorBrick?.price).toLocaleString() + "đ"
          : Number(oneInteriorBrickPrice).toLocaleString() + "đ",
      "Số Lượng": interiorBrickCount,
      "Tổng tiền":
        interiorBrickPrice === null
          ? Number(house?.interiorBrick?.price).toLocaleString() + "đ"
          : Number(interiorBrickPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextConstructionSteel,
      "Đơn giá":
        oneConstructionSteelPrice === null
          ? Number(house?.constructionSteel?.price).toLocaleString() + "đ"
          : Number(oneConstructionSteelPrice).toLocaleString() + "đ",
      "Số Lượng": constructionSteelCount,
      "Tổng tiền":
        constructionSteelPrice === null
          ? Number(house?.constructionSteel?.price).toLocaleString() + "đ"
          : Number(constructionSteelPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextPlasticPipe,
      "Đơn giá":
        onePlasticPipePrice === null
          ? Number(house?.plasticPipe?.price).toLocaleString() + "đ"
          : Number(onePlasticPipePrice).toLocaleString() + "đ",
      "Số Lượng": plasticPipeCount,
      "Tổng tiền":
        plasticPipePrice === null
          ? Number(house?.plasticPipe?.price).toLocaleString() + "đ"
          : Number(plasticPipePrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextPurlin,
      "Đơn giá":
        onePurlinPrice === null
          ? Number(house?.purlin?.price).toLocaleString() + "đ"
          : Number(onePurlinPrice).toLocaleString() + "đ",
      "Số Lượng": purlinCount,
      "Tổng tiền":
        purlinPrice === null
          ? Number(house?.purlin?.price).toLocaleString() + "đ"
          : Number(purlinPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextSteelPipe,
      "Đơn giá":
        oneSteelPipePrice === null
          ? Number(house?.steelPipe?.price).toLocaleString() + "đ"
          : Number(oneSteelPipePrice).toLocaleString() + "đ",
      "Số Lượng": steelPipeCount,
      "Tổng tiền":
        steelPipePrice === null
          ? Number(house?.steelPipe?.price).toLocaleString() + "đ"
          : Number(steelPipePrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextPaint,
      "Đơn giá":
        onePaintPrice === null
          ? Number(house?.paint?.price).toLocaleString() + "đ"
          : Number(onePaintPrice).toLocaleString() + "đ",
      "Số Lượng": paintCount,
      "Tổng tiền":
        paintPrice === null
          ? Number(house?.paint?.price).toLocaleString() + "đ"
          : Number(paintPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextFloorBrick,
      "Đơn giá":
        oneFloorBrickPrice === null
          ? Number(house?.floorBrick?.price).toLocaleString() + "đ"
          : Number(oneFloorBrickPrice).toLocaleString() + "đ",
      "Số Lượng": floorBrickCount,
      "Tổng tiền":
        floorBrickPrice === null
          ? Number(house?.floorBrick?.price).toLocaleString() + "đ"
          : Number(floorBrickPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextSink,
      "Đơn giá":
        oneSinkPrice === null
          ? Number(house?.sink?.price).toLocaleString() + "đ"
          : Number(oneSinkPrice).toLocaleString() + "đ",
      "Số Lượng": sinkCount,
      "Tổng tiền":
        sinkPrice === null
          ? Number(house?.sink?.price).toLocaleString() + "đ"
          : Number(sinkPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextWaterHeater,
      "Đơn giá":
        oneWaterHeaterPrice === null
          ? Number(house?.waterHeater?.price).toLocaleString() + "đ"
          : Number(oneWaterHeaterPrice).toLocaleString() + "đ",
      "Số Lượng": waterHeaterCount,
      "Tổng tiền":
        waterHeaterPrice === null
          ? Number(house?.waterHeater?.price).toLocaleString() + "đ"
          : Number(waterHeaterPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextLavabo,
      "Đơn giá":
        oneLavaboPrice === null
          ? Number(house?.lavabo?.price).toLocaleString() + "đ"
          : Number(oneLavaboPrice).toLocaleString() + "đ",
      "Số Lượng": lavaboCount,
      "Tổng tiền":
        lavaboPrice === null
          ? Number(house?.lavabo?.price).toLocaleString() + "đ"
          : Number(lavaboPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextToilet,
      "Đơn giá":
        oneToiletPrice === null
          ? Number(house?.toilet?.price).toLocaleString() + "đ"
          : Number(oneToiletPrice).toLocaleString() + "đ",
      "Số Lượng": toiletCount,
      "Tổng tiền":
        toiletPrice === null
          ? Number(house?.toilet?.price).toLocaleString() + "đ"
          : Number(toiletPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextShower,
      "Đơn giá":
        oneShowerPrice === null
          ? Number(house?.shower?.price).toLocaleString() + "đ"
          : Number(oneShowerPrice).toLocaleString() + "đ",
      "Số Lượng": showerCount,
      "Tổng tiền":
        showerPrice === null
          ? Number(house?.shower?.price).toLocaleString() + "đ"
          : Number(showerPrice).toLocaleString() + "đ",
    },
    {
      Tên: changTextSwitch,
      "Đơn giá":
        oneSwitchPrice === null
          ? Number(house?.switch?.price).toLocaleString() + "đ"
          : Number(oneSwitchPrice).toLocaleString() + "đ",
      "Số Lượng": switchCount,
      "Tổng tiền":
        switchPrice === null
          ? Number(house?.switch?.price).toLocaleString() + "đ"
          : Number(switchPrice).toLocaleString() + "đ",
    },

    {
      Tên: changTextLedLight,
      "Đơn giá":
        oneLedLightPrice === null
          ? Number(house?.ledLight?.price).toLocaleString() + "đ"
          : Number(oneLedLightPrice).toLocaleString() + "đ",
      "Số Lượng": ledLightCount,
      "Tổng tiền":
        ledLightPrice === null
          ? Number(house?.ledLight?.price).toLocaleString() + "đ"
          : Number(ledLightPrice).toLocaleString() + "đ",
    },

    {
      "Tổng tiền": Number(total).toLocaleString() + "đ",
    },
  ];

  useEffect(() => {
    dispatch(getDetailHouse(id));
    dispatch(getAllDoorList());
    dispatch(getAllSheetList());
    dispatch(getAllInteriorPaintList());
    dispatch(getAllInteriorBrickList());
    dispatch(getAllConstructionSteelList());
    dispatch(getAllPlasticPipeList());
    dispatch(getAllPurlinList());
    dispatch(getAllSteelPipeList());
    dispatch(getAllPaintList());
    dispatch(getAllFloorBrickList());
    dispatch(getAllSinkList());
    dispatch(getAllWaterHeaterList());
    dispatch(getAllLavaboList());
    dispatch(getAllToiletList());
    dispatch(getAllShowerList());
    dispatch(getAllSwitchList());
    dispatch(getAllLedLightList());

    setTotal(
      Number(house?.door?.price) +
        Number(house?.sheet?.price) +
        Number(house?.interiorPaint?.price) +
        Number(house?.interiorBrick?.price) +
        Number(house?.constructionSteel?.price) +
        Number(house?.plasticPipe?.price) +
        Number(house?.purlin?.price) +
        Number(house?.steelPipe?.price) +
        Number(house?.paint?.price) +
        Number(house?.floorBrick?.price) +
        Number(house?.sink?.price) +
        Number(house?.waterHeater?.price) +
        Number(house?.lavabo?.price) +
        Number(house?.toilet?.price) +
        Number(house?.shower?.price) +
        Number(house?.switch?.price) +
        Number(house?.ledLight?.price)
    );
    setDoorPrice(Number(house?.door?.price));
    setSheetPrice(Number(house?.sheet?.price));
    setInteriorPaintPrice(Number(house?.interiorPaint?.price));
    setInteriorBrickPrice(Number(house?.interiorBrick?.price));
    setConstructionSteelPrice(Number(house?.constructionSteel?.price));
    setPlasticPipePrice(Number(house?.plasticPipe?.price));
    setPurlinPrice(Number(house?.purlin?.price));
    setSteelPipePrice(Number(house?.steelPipe?.price));
    setPaintPrice(Number(house?.paint?.price));
    setFloorBrickPrice(Number(house?.floorBrick?.price));
    setSinkPrice(Number(house?.sink?.price));
    setWaterHeaterPrice(Number(house?.waterHeater?.price));
    setLavaboPrice(Number(house?.lavabo?.price));
    setToiletPrice(Number(house?.toilet?.price));
    setShowerPrice(Number(house?.shower?.price));
    setSwitchPrice(Number(house?.switch?.price));
    setLedLightPrice(Number(house?.ledLight?.price));

    setChangeDoor(Number(house?.door?.price));
    setChangeSheet(Number(house?.sheet?.price));
    setChangeInteriorPaint(Number(house?.interiorPaint?.price));
    setChangeInteriorBrick(Number(house?.interiorBrick?.price));
    setChangeConstructionSteel(Number(house?.constructionSteel?.price));
    setChangePlasticPipe(Number(house?.plasticPipe?.price));
    setChangePurlin(Number(house?.purlin?.price));
    setChangeSteelPipe(Number(house?.steelPipe?.price));
    setChangePaint(Number(house?.paint?.price));
    setChangeFloorBrick(Number(house?.floorBrick?.price));
    setChangeSink(Number(house?.sink?.price));
    setChangeWaterHeater(Number(house?.waterHeater?.price));
    setChangeLavabo(Number(house?.lavabo?.price));
    setChangeToilet(Number(house?.toilet?.price));
    setChangeShower(Number(house?.shower?.price));
    setChangeSwitch(Number(house?.switch?.price));
    setChangeLedLight(Number(house?.ledLight?.price));

    setChangeTextDoor(house?.door?.name);
    setChangeTextSheet(house?.sheet?.name);
    setChangeTextInteriorPaint(house?.interiorPaint?.name);
    setChangeTextInteriorBrick(house?.interiorBrick?.name);
    setChangeTextConstructionSteel(house?.constructionSteel?.name);
    setChangeTextPlasticPipe(house?.plasticPipe?.name);
    setChangeTextPurlin(house?.purlin?.name);
    setChangeTextSteelPipe(house?.steelPipe?.name);

    setChangeTextPaint(house?.paint?.name);
    setChangeTextFloorBrick(house?.floorBrick?.name);
    setChangeTextSink(house?.sink?.name);
    setChangeTextWaterHeater(house?.waterHeater?.name);
    setChangeTextLavabo(house?.lavabo?.name);
    setChangeTextToilet(house?.toilet?.name);
    setChangeTextShower(house?.shower?.name);
    setChangeTextSwitch(house?.switch?.name);
    setChangeTextLedLight(house?.ledLight?.name);
  }, [
    dispatch,
    id,
    house?.door?.price,
    house?.sheet?.price,
    house?.interiorPaint?.price,
    house?.interiorBrick?.price,
    house?.constructionSteel?.price,
    house?.plasticPipe?.price,
    house?.purlin?.price,
    house?.steelPipe?.price,
    house?.paint?.price,
    house?.floorBrick?.price,
    house?.sink?.price,
    house?.waterHeater?.price,
    house?.lavabo?.price,
    house?.toilet?.price,
    house?.shower?.price,
    house?.switch?.price,
    house?.ledLight?.price,
  ]);

  //Table
  const overviewColumns = [
    {
      title: "Loại tầng",
      dataIndex: "typeOfFloor",
      key: "typeOfFloor",
    },

    {
      title: "Diện tích sàn",
      dataIndex: "floorArea",
      key: "floorArea",
      render: (data) => {
        return <Tag color="purple">{data}m²</Tag>;
      },
    },

    {
      title: "Diện tích đất",
      dataIndex: "landArea",
      key: "landArea",
      render: (data) => {
        return <Tag color="purple">{data}m²</Tag>;
      },
    },

    {
      title: "Diện tích trống",
      dataIndex: "emptyArea",
      key: "emptyArea",
      render: (data) => {
        return <Tag color="purple">{data}m²</Tag>;
      },
    },
  ];

  const roomColumns = [
    {
      title: "Phòng khách",
      dataIndex: "livingRoom",
      key: "livingRoom",
    },

    {
      title: "Phòng ngủ",
      dataIndex: "bedroom",
      key: "bedroom",
    },

    {
      title: "Nhà vệ sinh",
      dataIndex: "toiletNum",
      key: "toiletNum",
    },
  ];

  const exteriorColumns = [
    {
      title: "Cửa",
      dataIndex: ["door", "name"],
      key: ["door", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.door?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextDoor(e.target.selectedOptions[0].text);
                setDoorPrice(Number(e.target.value));
                setDoorCount(1);
                setChangeDoor(Number(e.target.value));
                setOneDoorPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(doorPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {doorList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.door?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>

            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setDoorCount((pre) => pre + 1);
                    setDoorPrice((pre) => pre + Number(changeDoor));
                    setTotal((prevState) => prevState + Number(changeDoor));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{doorCount}</span>
                <Button
                  disabled={doorCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setDoorCount((pre) => pre - 1);
                    setDoorPrice((pre) => pre - Number(changeDoor));
                    setTotal((prevState) => prevState - Number(changeDoor));
                  }}
                >
                  -
                </Button>
              </span>
            </p>
            <p>
              Giá tiền{" "}
              {convertVND(
                doorPrice === null ? context?.door?.price : doorPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Tôn",
      dataIndex: ["sheet", "name"],
      key: ["sheet", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.sheet?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextSheet(e.target.selectedOptions[0].text);
                setSheetPrice(Number(e.target.value));
                setSheetCount(1);
                setChangeSheet(Number(e.target.value));
                setOneSheetPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(sheetPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {sheetList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.sheet?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setSheetCount((pre) => pre + 1);
                    setSheetPrice((pre) => pre + Number(changeSheet));
                    setTotal((prevState) => prevState + Number(changeSheet));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{sheetCount}</span>
                <Button
                  disabled={sheetCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setSheetCount((pre) => pre - 1);
                    setSheetPrice((pre) => pre - Number(changeSheet));
                    setTotal((prevState) => prevState - Number(changeSheet));
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                sheetPrice === null ? context?.sheet?.price : sheetPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Sơn",
      dataIndex: ["interiorPaint", "name"],
      key: ["interiorPaint", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.interiorPaint?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextInteriorPaint(e.target.selectedOptions[0].text);
                setInteriorPaintPrice(Number(e.target.value));
                setInteriorPaintCount(1);
                setChangeInteriorPaint(Number(e.target.value));
                setOneInteriorPaintPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(interiorPaintPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {interiorPaintList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.interiorPaint?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setInteriorPaintCount((pre) => pre + 1);
                    setInteriorPaintPrice(
                      (pre) => pre + Number(changeInteriorPaint)
                    );
                    setTotal(
                      (prevState) => prevState + Number(changeInteriorPaint)
                    );
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{interiorPaintCount}</span>
                <Button
                  disabled={interiorPaintCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setInteriorPaintCount((pre) => pre - 1);
                    setInteriorPaintPrice(
                      (pre) => pre - Number(changeInteriorPaint)
                    );
                    setTotal(
                      (prevState) => prevState - Number(changeInteriorPaint)
                    );
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                interiorPaintPrice === null
                  ? context?.interiorPaint?.price
                  : interiorPaintPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Gạch",
      dataIndex: ["interiorBrick", "name"],
      key: ["interiorBrick", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.interiorBrick?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextInteriorBrick(e.target.selectedOptions[0].text);
                setInteriorBrickPrice(Number(e.target.value));
                setInteriorBrickCount(1);
                setChangeInteriorBrick(Number(e.target.value));
                setOneInteriorBrickPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(interiorBrickPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {interiorBrickList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.interiorBrick?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setInteriorBrickCount((pre) => pre + 1);
                    setInteriorBrickPrice(
                      (pre) => pre + Number(changeInteriorBrick)
                    );
                    setTotal(
                      (prevState) => prevState + Number(changeInteriorBrick)
                    );
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{interiorBrickCount}</span>
                <Button
                  disabled={interiorBrickCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setInteriorBrickCount((pre) => pre - 1);
                    setInteriorBrickPrice(
                      (pre) => pre - Number(changeInteriorBrick)
                    );
                    setTotal(
                      (prevState) => prevState - Number(changeInteriorBrick)
                    );
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                interiorBrickPrice === null
                  ? context?.interiorBrick?.price
                  : interiorBrickPrice
              )}
            </p>
          </div>
        );
      },
    },
  ];

  const exteriorColumns2 = [
    {
      title: "Thép xây dựng",
      dataIndex: ["constructionSteel", "name"],
      key: ["constructionSteel", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.constructionSteel?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextConstructionSteel(
                  e.target.selectedOptions[0].text
                );
                setConstructionSteelPrice(Number(e.target.value));
                setConstructionSteelCount(1);
                setChangeConstructionSteel(Number(e.target.value));
                setOneConstructionSteelPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(constructionSteelPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {constructionSteelList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.constructionSteel?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setConstructionSteelCount((pre) => pre + 1);
                    setConstructionSteelPrice(
                      (pre) => pre + Number(changeConstructionSteel)
                    );
                    setTotal(
                      (prevState) => prevState + Number(changeConstructionSteel)
                    );
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>
                  {constructionSteelCount}
                </span>
                <Button
                  disabled={constructionSteelCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setConstructionSteelCount((pre) => pre - 1);
                    setConstructionSteelPrice(
                      (pre) => pre - Number(changeConstructionSteel)
                    );
                    setTotal(
                      (prevState) => prevState - Number(changeConstructionSteel)
                    );
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                constructionSteelPrice === null
                  ? context?.constructionSteel?.price
                  : constructionSteelPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Ống nhựa",
      dataIndex: ["plasticPipe", "name"],
      key: ["plasticPipe", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.plasticPipe?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextPlasticPipe(e.target.selectedOptions[0].text);
                setPlasticPipePrice(Number(e.target.value));
                setPlasticPipeCount(1);
                setChangePlasticPipe(Number(e.target.value));
                setOnePlasticPipePrice(Number(e.target.value));
                setTotal((pre) => pre - Number(plasticPipePrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {plasticPipeList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.plasticPipe?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setPlasticPipeCount((pre) => pre + 1);
                    setPlasticPipePrice(
                      (pre) => pre + Number(changePlasticPipe)
                    );
                    setTotal(
                      (prevState) => prevState + Number(changePlasticPipe)
                    );
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{plasticPipeCount}</span>
                <Button
                  disabled={plasticPipeCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setPlasticPipeCount((pre) => pre - 1);
                    setPlasticPipePrice(
                      (pre) => pre - Number(changePlasticPipe)
                    );
                    setTotal(
                      (prevState) => prevState - Number(changePlasticPipe)
                    );
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                plasticPipePrice === null
                  ? context?.plasticPipe?.price
                  : plasticPipePrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Xà gồ",
      dataIndex: ["purlin", "name"],
      key: ["purlin", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.purlin?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextPurlin(e.target.selectedOptions[0].text);
                setPurlinPrice(Number(e.target.value));
                setPurlinCount(1);
                setChangePurlin(Number(e.target.value));
                setOnePurlinPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(purlinPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {purlinList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.purlin?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setPurlinCount((pre) => pre + 1);
                    setPurlinPrice((pre) => pre + Number(changePurlin));
                    setTotal((prevState) => prevState + Number(changePurlin));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{purlinCount}</span>
                <Button
                  disabled={purlinCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setPurlinCount((pre) => pre - 1);
                    setPurlinPrice((pre) => pre - Number(changePurlin));
                    setTotal((prevState) => prevState - Number(changePurlin));
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                purlinPrice === null ? context?.purlin?.price : purlinPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Ống thép",
      dataIndex: ["steelPipe", "name"],
      key: ["steelPipe", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.steelPipe?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextSteelPipe(e.target.selectedOptions[0].text);
                setSteelPipePrice(Number(e.target.value));
                setSteelPipeCount(1);
                setChangeSteelPipe(Number(e.target.value));
                setOneSteelPipePrice(Number(e.target.value));
                setTotal((pre) => pre - Number(steelPipePrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {steelPipeList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.steelPipe?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setSteelPipeCount((pre) => pre + 1);
                    setSteelPipePrice((pre) => pre + Number(changeSteelPipe));
                    setTotal(
                      (prevState) => prevState + Number(changeSteelPipe)
                    );
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{steelPipeCount}</span>
                <Button
                  disabled={steelPipeCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setSteelPipeCount((pre) => pre - 1);
                    setSteelPipePrice((pre) => pre - Number(changeSteelPipe));
                    setTotal(
                      (prevState) => prevState - Number(changeSteelPipe)
                    );
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                steelPipePrice === null
                  ? context?.steelPipe?.price
                  : steelPipePrice
              )}
            </p>
          </div>
        );
      },
    },
  ];

  const internalColumn1 = [
    {
      title: "Sơn",
      dataIndex: ["paint", "name"],
      key: ["paint", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.paint?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextPaint(e.target.selectedOptions[0].text);
                setPaintPrice(Number(e.target.value));
                setPaintCount(1);
                setChangePaint(Number(e.target.value));
                setOnePaintPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(paintPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {paintList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.paint?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setPaintCount((pre) => pre + 1);
                    setPaintPrice((pre) => pre + Number(changePaint));
                    setTotal((prevState) => prevState + Number(changePaint));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{paintCount}</span>
                <Button
                  disabled={paintCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setPaintCount((pre) => pre - 1);
                    setPaintPrice((pre) => pre - Number(changePaint));
                    setTotal((prevState) => prevState - Number(changePaint));
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                paintPrice === null ? context?.paint?.price : paintPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Gạch",
      dataIndex: ["floorBrick", "name"],
      key: ["floorBrick", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.floorBrick?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextFloorBrick(e.target.selectedOptions[0].text);
                setFloorBrickPrice(Number(e.target.value));
                setFloorBrickCount(1);
                setChangeFloorBrick(Number(e.target.value));
                setOneFloorBrickPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(floorBrickPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {floorBrickList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.floorBrick?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setFloorBrickCount((pre) => pre + 1);
                    setFloorBrickPrice((pre) => pre + Number(changeFloorBrick));
                    setTotal(
                      (prevState) => prevState + Number(changeFloorBrick)
                    );
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{floorBrickCount}</span>
                <Button
                  disabled={floorBrickCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setFloorBrickCount((pre) => pre - 1);
                    setFloorBrickPrice((pre) => pre - Number(changeFloorBrick));
                    setTotal(
                      (prevState) => prevState - Number(changeFloorBrick)
                    );
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                floorBrickPrice === null
                  ? context?.floorBrick?.price
                  : floorBrickPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Bồn nước",
      dataIndex: ["sink", "name"],
      key: ["sink", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.sink?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextSink(e.target.selectedOptions[0].text);
                setSinkPrice(Number(e.target.value));
                setSinkCount(1);
                setChangeSink(Number(e.target.value));
                setOneSinkPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(sinkPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {sinkList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.sink?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setSinkCount((pre) => pre + 1);
                    setSinkPrice((pre) => pre + Number(changeSink));
                    setTotal((prevState) => prevState + Number(changeSink));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{sinkCount}</span>
                <Button
                  disabled={sinkCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setSinkCount((pre) => pre - 1);
                    setSinkPrice((pre) => pre - Number(changeSink));
                    setTotal((prevState) => prevState - Number(changeSink));
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                sinkPrice === null ? context?.sink?.price : sinkPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Máy nước nóng",
      dataIndex: ["waterHeater", "name"],
      key: ["waterHeater", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.waterHeater?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextWaterHeater(e.target.selectedOptions[0].text);
                setWaterHeaterPrice(Number(e.target.value));
                setWaterHeaterCount(1);
                setChangeWaterHeater(Number(e.target.value));
                setOneWaterHeaterPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(waterHeaterPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {waterHeaterList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.waterHeater?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setWaterHeaterCount((pre) => pre + 1);
                    setWaterHeaterPrice(
                      (pre) => pre + Number(changeWaterHeater)
                    );
                    setTotal(
                      (prevState) => prevState + Number(changeWaterHeater)
                    );
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{waterHeaterCount}</span>
                <Button
                  disabled={waterHeaterCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setWaterHeaterCount((pre) => pre - 1);
                    setWaterHeaterPrice(
                      (pre) => pre - Number(changeWaterHeater)
                    );
                    setTotal(
                      (prevState) => prevState - Number(changeWaterHeater)
                    );
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                waterHeaterPrice === null
                  ? context?.waterHeater?.price
                  : waterHeaterPrice
              )}
            </p>
          </div>
        );
      },
    },
  ];

  const internalColumn2 = [
    {
      title: "Lavabo",
      dataIndex: ["lavabo", "name"],
      key: ["lavabo", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.lavabo?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextLavabo(e.target.selectedOptions[0].text);
                setLavaboPrice(Number(e.target.value));
                setLavaboCount(1);
                setChangeLavabo(Number(e.target.value));
                setOneLavaboPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(lavaboPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {lavaboList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.lavabo?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setLavaboCount((pre) => pre + 1);
                    setLavaboPrice((pre) => pre + Number(changeLavabo));
                    setTotal((prevState) => prevState + Number(changeLavabo));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{lavaboCount}</span>
                <Button
                  disabled={lavaboCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setLavaboCount((pre) => pre - 1);
                    setLavaboPrice((pre) => pre - Number(changeLavabo));
                    setTotal((prevState) => prevState - Number(changeLavabo));
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                lavaboPrice === null ? context?.lavabo?.price : lavaboPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Toilet",
      dataIndex: ["toilet", "name"],
      key: ["toilet", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.toilet?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextToilet(e.target.selectedOptions[0].text);
                setToiletPrice(Number(e.target.value));
                setToiletCount(1);
                setChangeToilet(Number(e.target.value));
                setOneToiletPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(toiletPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {toiletList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.toilet?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setToiletCount((pre) => pre + 1);
                    setToiletPrice((pre) => pre + Number(changeToilet));
                    setTotal((prevState) => prevState + Number(changeToilet));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{toiletCount}</span>
                <Button
                  disabled={toiletCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setToiletCount((pre) => pre - 1);
                    setToiletPrice((pre) => pre - Number(changeToilet));
                    setTotal((prevState) => prevState - Number(changeToilet));
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                toiletPrice === null ? context?.toilet?.price : toiletPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Sen tắm",
      dataIndex: ["shower", "name"],
      key: ["shower", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.shower?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextShower(e.target.selectedOptions[0].text);
                setShowerPrice(Number(e.target.value));
                setShowerCount(1);
                setChangeShower(Number(e.target.value));
                setOneShowerPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(showerPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {showerList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.shower?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setShowerCount((pre) => pre + 1);
                    setShowerPrice((pre) => pre + Number(changeShower));
                    setTotal((prevState) => prevState + Number(changeShower));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{showerCount}</span>
                <Button
                  disabled={showerCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setShowerCount((pre) => pre - 1);
                    setShowerPrice((pre) => pre - Number(changeShower));
                    setTotal((prevState) => prevState - Number(changeShower));
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                showerPrice === null ? context?.shower?.price : showerPrice
              )}
            </p>
          </div>
        );
      },
    },

    {
      title: "Công tắc",
      dataIndex: ["switch", "name"],
      key: ["switch", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.switch?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextSwitch(e.target.selectedOptions[0].text);
                setSwitchPrice(Number(e.target.value));
                setSwitchCount(1);
                setChangeSwitch(Number(e.target.value));
                setOneSwitchPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(switchPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {switchList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.switch?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setSwitchCount((pre) => pre + 1);
                    setSwitchPrice((pre) => pre + Number(changeSwitch));
                    setTotal((prevState) => prevState + Number(changeSwitch));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{switchCount}</span>
                <Button
                  disabled={switchCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setSwitchCount((pre) => pre - 1);
                    setSwitchPrice((pre) => pre - Number(changeSwitch));
                    setTotal((prevState) => prevState - Number(changeSwitch));
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                switchPrice === null ? context?.switch?.price : switchPrice
              )}
            </p>
          </div>
        );
      },
    },
    {
      title: "Đèn led",
      dataIndex: ["ledLight", "name"],
      key: ["ledLight", "name"],
      render: (data, context) => {
        return (
          <div>
            <div style={{ marginBottom: 15 }}>
              <Image
                width={70}
                height={70}
                src={context?.ledLight?.image || error}
              />
            </div>
            <select
              onChange={(e) => {
                setChangeTextLedLight(e.target.selectedOptions[0].text);
                setLedLightPrice(Number(e.target.value));
                setLedLightCount(1);
                setChangeLedLight(Number(e.target.value));
                setOneLedLightPrice(Number(e.target.value));
                setTotal((pre) => pre - Number(ledLightPrice));
                setTotal((pre) => pre + Number(e.target.value));
              }}
              style={{ margin: "10px 0" }}
            >
              {ledLightList?.map((item, index) => {
                return (
                  <option
                    value={item.price}
                    selected={item.id === context?.ledLight?.id}
                    key={index}
                  >
                    {item.name.slice(0, 25) + "..."}
                  </option>
                );
              })}
            </select>
            <p>
              Số lượng:
              <span>
                <Button
                  style={{ marginLeft: 5 }}
                  onClick={() => {
                    setLedLightCount((pre) => pre + 1);
                    setLedLightPrice((pre) => pre + Number(changeLedLight));
                    setTotal((prevState) => prevState + Number(changeLedLight));
                  }}
                  size="small"
                  type="primary"
                  shape="circle"
                >
                  +
                </Button>
                <span style={{ margin: "0 5px" }}>{ledLightCount}</span>
                <Button
                  disabled={ledLightCount === 0}
                  type="primary"
                  danger
                  size="small"
                  shape="circle"
                  onClick={() => {
                    setLedLightCount((pre) => pre - 1);
                    setLedLightPrice((pre) => pre - Number(changeLedLight));
                    setTotal((prevState) => prevState - Number(changeLedLight));
                  }}
                >
                  -
                </Button>
              </span>
            </p>

            <p>
              Giá tiền{" "}
              {convertVND(
                ledLightPrice === null
                  ? context?.ledLight?.price
                  : ledLightPrice
              )}
            </p>
          </div>
        );
      },
    },
  ];

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="type__title">
        <h4 className="type__title__h2">
          {house.name} <span>({house.region})</span>
        </h4>
        <h5 style={{ fontWeight: "normal" }} className="type__title__h5">
          (có thể chỉnh sửa và thay đổi thông tin vật tư phù hợp với yêu cầu của
          khách hàng)
        </h5>
      </div>
      <hr />
      <div className="table__first__info">
        <Table
          dataSource={[house]}
          columns={overviewColumns}
          title={() => "Thông tin tổng quan"}
        />
      </div>
      <hr />
      <Carousel pause fade variant="dark">
        {house.images &&
          house.images.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <div className="img__area">
                  <img
                    key={index}
                    style={{ height: 550, width: 750 }}
                    className="d-block img__area__item"
                    src={item}
                    alt="First slide"
                  />
                </div>
                <Carousel.Caption>
                  <h5 className="type__title">{house.name}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
      <hr />
      <div className="table__first__info">
        <Table dataSource={[house]} columns={roomColumns} />
      </div>

      <Table
        dataSource={[house]}
        title={() => "Chi tiết vật tư ngoại thất"}
        columns={exteriorColumns}
      />

      <Table dataSource={[house]} columns={exteriorColumns2} />

      <Table
        dataSource={[house]}
        title={() => "Chi tiết vật tư nội thất"}
        columns={internalColumn1}
      />

      <Table dataSource={[house]} columns={internalColumn2} />

      <div style={{ textAlign: "center", marginBottom: 100 }}>
        <div style={{ fontSize: 20 }}>
          Tổng: <span>{convertVND(total)}</span>
        </div>
        <ExportExcel data={dataExport} />
      </div>
    </motion.div>
  );
};

export default HouseDetail;
