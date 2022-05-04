import "antd/dist/antd.css";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import UploadImage from "./firebase/UploadImage";
import UploadMultiImage from "./firebase/UploadMultiImage";
import "./index.css";
import About from "./pages/About";
import Admin from "./pages/admin/Admin";
import AddNewConstructionSteel from "./pages/admin/ConstructionSteelManagement/AddNewConstructionSteel";
import UpdateConstructionSteel from "./pages/admin/ConstructionSteelManagement/UpdateConstructionSteel";
import AddNewDoor from "./pages/admin/DoorManagement/AddNewDoor";
import UpdateDoor from "./pages/admin/DoorManagement/UpdateDoor";
import AddNewFloorBrick from "./pages/admin/FloorBrickManagement/AddNewFloorBrick";
import UpdateFloorBrick from "./pages/admin/FloorBrickManagement/UpdateFloorBrick";
import AddNewInteriorBrick from "./pages/admin/InteriorBrickManagement/AddNewInteriorBrick";
import UpdateInteriorBrick from "./pages/admin/InteriorBrickManagement/UpdateInteriorBrick";
import AddNewInteriorPaint from "./pages/admin/InteriorPaintManagement/AddNewInteriorPaint";
import UpdateInteriorPaint from "./pages/admin/InteriorPaintManagement/UpdateInteriorPaint";
import AddNewLavabo from "./pages/admin/LavaboManagement/AddNewLavabo";
import UpdateLavabo from "./pages/admin/LavaboManagement/UpdateLavabo";
import AddNewLedLight from "./pages/admin/LedLightManagement/AddNewLedLight";
import UpdateLedLight from "./pages/admin/LedLightManagement/UpdateLedLight";
import AddNewPaint from "./pages/admin/PaintManagement/AddNewPaint";
import UpdatePaint from "./pages/admin/PaintManagement/UpdatePaint";
import AddNewPlasticPipe from "./pages/admin/PlasticPipeManagement/AddNewPlasticPipe";
import UpdatePlasticPipe from "./pages/admin/PlasticPipeManagement/UpdatePlasticPipe";
import CreateProduct from "./pages/admin/ProductManagement/CreateProduct";
import UpdateProduct from "./pages/admin/ProductManagement/UpdateProduct";
import AddNewPurlin from "./pages/admin/PurlinManagement/AddNewPurlin";
import UpdatePurlin from "./pages/admin/PurlinManagement/UpdatePurlin";
import AddNewSheet from "./pages/admin/SheetManagement/AddNewSheet";
import UpdateSheet from "./pages/admin/SheetManagement/UpdateSheet";
import AddNewSwitch from "./pages/admin/SwitchManagement/AddNewSwitch";
import UpdateSwitch from "./pages/admin/SwitchManagement/UpdateSwitch";
import AddNewToilet from "./pages/admin/ToiletManagement/AddNewToilet";
import UpdateToilet from "./pages/admin/ToiletManagement/UpdateToilet";
import AddNewUser from "./pages/admin/UserManagement/AddNewUser";
import UpdateUser from "./pages/admin/UserManagement/UpdateUser";
import Central from "./pages/areasPage/areasHouse/Central";
import HouseDetail from "./pages/areasPage/areasHouse/HouseDetail";
import Northern from "./pages/areasPage/areasHouse/Northern";
import South from "./pages/areasPage/areasHouse/South";
import LoginForm from "./pages/auth/LoginForm";
import RegisterForm from "./pages/auth/RegisterForm";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/home/Home";
import ProductPage from "./pages/Product/Product";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route path="/about" exact component={About} />
        <Route path="/upload" exact component={UploadImage} />
        <Route path="/uploadmulti" exact component={UploadMultiImage} />

        <Route path="/areas/northern" exact component={Northern} />

        <Route path="/areas/central" exact component={Central} />

        <Route path="/areas/south" exact component={South} />

        <Route path="/areas/house/:id" exact component={HouseDetail} />

        <Route path="/product" exact component={ProductPage} />

        <Route path="/contact" exact component={Contact} />

        <Route path="/faq" exact component={Faq} />

        <Route path="/admin/user/add-user" exact component={AddNewUser} />

        <Route
          path="/admin/user/update-user/:id"
          exact
          component={UpdateUser}
        />

        <Route
          path="/admin/lavabo/update-lavabo/:id"
          exact
          component={UpdateLavabo}
        />

        <Route path="/admin/lavabo/add-lavabo" exact component={AddNewLavabo} />

        <Route
          path="/admin/ledLight/update-ledLight/:id"
          exact
          component={UpdateLedLight}
        />

        <Route
          path="/admin/ledLight/add-ledLight"
          exact
          component={AddNewLedLight}
        />

        <Route
          path="/admin/toilet/update-toilet/:id"
          exact
          component={UpdateToilet}
        />

        <Route path="/admin/toilet/add-toilet" exact component={AddNewToilet} />

        <Route
          path="/admin/switch/update-switch/:id"
          exact
          component={UpdateSwitch}
        />

        <Route path="/admin/switch/add-switch" exact component={AddNewSwitch} />

        <Route
          path="/admin/constructionSteel/update-constructionSteel/:id"
          exact
          component={UpdateConstructionSteel}
        />

        <Route
          path="/admin/constructionSteel/add-constructionSteel"
          exact
          component={AddNewConstructionSteel}
        />

        <Route
          path="/admin/floorBrick/update-floorBrick/:id"
          exact
          component={UpdateFloorBrick}
        />

        <Route
          path="/admin/floorBrick/add-floorBrick"
          exact
          component={AddNewFloorBrick}
        />

        <Route
          path="/admin/interiorBrick/update-interiorBrick/:id"
          exact
          component={UpdateInteriorBrick}
        />

        <Route
          path="/admin/interiorBrick/add-interiorBrick"
          exact
          component={AddNewInteriorBrick}
        />

        <Route
          path="/admin/interiorPaint/update-interiorPaint/:id"
          exact
          component={UpdateInteriorPaint}
        />

        <Route
          path="/admin/interiorPaint/add-interiorPaint"
          exact
          component={AddNewInteriorPaint}
        />

        <Route
          path="/admin/paint/update-paint/:id"
          exact
          component={UpdatePaint}
        />

        <Route path="/admin/paint/add-paint" exact component={AddNewPaint} />

        <Route
          path="/admin/door/update-door/:id"
          exact
          component={UpdateDoor}
        />

        <Route path="/admin/door/add-door" exact component={AddNewDoor} />

        <Route
          path="/admin/plasticPipe/update-plasticPipe/:id"
          exact
          component={UpdatePlasticPipe}
        />

        <Route
          path="/admin/plasticPipe/add-plasticPipe"
          exact
          component={AddNewPlasticPipe}
        />

        <Route
          path="/admin/purlin/update-purlin/:id"
          exact
          component={UpdatePurlin}
        />

        <Route path="/admin/purlin/add-purlin" exact component={AddNewPurlin} />

        <Route
          path="/admin/sheet/update-sheet/:id"
          exact
          component={UpdateSheet}
        />

        <Route path="/admin/sheet/add-sheet" exact component={AddNewSheet} />

        <Route
          path="/admin/product/create-product"
          exact
          component={CreateProduct}
        />

        <Route path="/admin/product/:id" exact component={UpdateProduct} />

        <Route path="/admin" exact component={Admin} />

        <Route path="/auth/register" component={RegisterForm} exact />
        <Route path="/auth/login" component={LoginForm} exact />

        <Route path="/" exact component={Home} />
      </Switch>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
