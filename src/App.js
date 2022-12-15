/** @format */

import { useLocation } from "react-router-dom";
import "./App.css";
import Benner from "./components/carousel/Benner";
import Footer from "./components/footer/Footer";
import Menu from "./components/navbar/Menu";
import MyRoute from "./router/MyRoute";

function App() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      {pathname === "/dashboard" ? <Benner /> : ""}
      <Menu />
      <MyRoute />
      <Footer />
    </div>
  );
}

export default App;
