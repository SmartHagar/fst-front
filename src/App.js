/** @format */

import { useMemo, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Menu from "./components/navbar/Menu";
import { SearchDataContext } from "./context/SearchDataContext";
import MyRoute from "./router/MyRoute";

function App() {
  const [searchData, setSearchData] = useState("");
  const search = useMemo(() => ({ searchData, setSearchData }), [searchData]);

  return (
    <SearchDataContext.Provider value={search}>
      <div>
        <Menu />
        <MyRoute />
        <Footer />
      </div>
    </SearchDataContext.Provider>
  );
}

export default App;
