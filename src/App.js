/** @format */

import "./App.css";
import Footer from "./components/footer/Footer";
import Menu from "./components/navbar/Menu";
import MyRoute from "./router/MyRoute";

function App() {
  return (
    <>
      <Menu />
      <MyRoute />
      <Footer />
    </>
  );
}

export default App;
