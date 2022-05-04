import React from "react";
import { Button, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import ProductManagement from "./ProductManagement/ProductManagement";
import DoorManagement from "./DoorManagement/DoorManagement";
import UserManagement from "./UserManagement/UserManagement";
import { NavLink } from "react-router-dom";
import TypeOfProductManagement from "./TypeOfProductManagement/TypeOfProductManagement";
import { notiFunc } from "../../utils/settings/notification/notiFunc";
import LavaboManagement from "./LavaboManagement/LavaboManagement";
import LedLightManagement from "./LedLightManagement/LedLightManagement";
import ToiletManagement from "./ToiletManagement/ToiletManagement";
import SwitchManagement from "./SwitchManagement/SwitchManagement";
import ConstructionSteelManagement from "./ConstructionSteelManagement/ConstructionSteelManagement";
import FloorBrickManagement from "./FloorBrickManagement/FloorBrickManagement";
import InteriorBrickManagement from "./InteriorBrickManagement/InteriorBrickManagement";
import InteriorPaintManagement from "./InteriorPaintManagement/InteriorPaintManagement";
import PaintManagement from "./PaintManagement/PaintManagement";
import HouseManagement from "./HouseManagement/HouseManagement";
import PlasticPipeManagement from "./PlasticPipeManagement/PlasticPipeManagement";
import PurlinManagement from "./PurlinManagement/PurlinManagement";
import SheetManagement from "./SheetManagement/SheetManagement";
import ShowerManagement from "./ShowerManagement/ShowerManagement";
import SteelPipeManagement from "./SteelPipeManagement/SteelPipeManagement";
import WaterHeaterManagement from "./WaterHeaterManagement/WaterHeaterManagement";
import SinkManagement from "./SinkManagement/SinkManagement";

const Admin = () => {
  const { TabPane } = Tabs;
  const userInfo = JSON.parse(localStorage.getItem("hoasen-user-logged"));

  if (!userInfo || !userInfo.user.isAdmin) {
    notiFunc("error", "Không có quyền truy cập");
    return <Redirect to="/" />;
  }

  return (
    <Tabs tabPosition="left">
      <TabPane style={{ marginTop: 15 }} tab="Quản lý người dùng" key="1">
        <NavLink to="/admin/user/add-user">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <UserManagement />
      </TabPane>
      <TabPane style={{ marginTop: 15 }} tab="Quản lý nhà" key="2">
        <NavLink to="/admin/user/add-user">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <HouseManagement />
      </TabPane>
      <TabPane style={{ marginTop: 15 }} tab="Quản lý sản phẩm" key="3">
        <NavLink to="/admin/product/create-product">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <ProductManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý loại sản phẩm" key="4">
        <NavLink to="/admin/user/add-user">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <TypeOfProductManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý Lavabo" key="5">
        <NavLink to="/admin/lavabo/add-lavabo">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <LavaboManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý đèn led" key="6">
        <NavLink to="/admin/ledLight/add-ledLight">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <LedLightManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý toilet" key="7">
        <NavLink to="/admin/toilet/add-toilet">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <ToiletManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý công tắc" key="8">
        <NavLink to="/admin/switch/add-switch">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <SwitchManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý thép xây dựng" key="9">
        <NavLink to="/admin/constructionSteel/add-constructionSteel">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <ConstructionSteelManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý gạch ốp lát" key="10">
        <NavLink to="/admin/floorBrick/add-floorBrick">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <FloorBrickManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý gạch ngoại thất" key="11">
        <NavLink to="/admin/interiorBrick/add-interiorBrick">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <InteriorBrickManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý sơn ngoại thất" key="12">
        <NavLink to="/admin/interiorPaint/add-interiorPaint">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <InteriorPaintManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý sơn nội thất" key="13">
        <NavLink to="/admin/paint/add-paint">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <PaintManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý cửa" key="14">
        <NavLink to="/admin/door/add-door">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <DoorManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý ống nhựa" key="15">
        <NavLink to="/admin/plasticPipe/add-plasticPipe">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <PlasticPipeManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý xà gồ" key="16">
        <NavLink to="/admin/purlin/add-purlin">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <PurlinManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý tôn" key="17">
        <NavLink to="/admin/sheet/add-sheet">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <SheetManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý sen tắm" key="18">
        <NavLink to="/admin/user/add-user">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <ShowerManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý ống thép" key="19">
        <NavLink to="/admin/user/add-user">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <SteelPipeManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý máy nước nóng" key="20">
        <NavLink to="/admin/user/add-user">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <WaterHeaterManagement />
      </TabPane>

      <TabPane style={{ marginTop: 15 }} tab="Quản lý máy bồn nước" key="21">
        <NavLink to="/admin/user/add-user">
          <Button style={{ marginBottom: 15 }} type="dash" danger>
            Thêm mới
          </Button>
        </NavLink>
        <SinkManagement />
      </TabPane>
    </Tabs>
  );
};

export default Admin;
