import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Mycomponent from "./components/Flag";
import PageTwo from "./components/pageTwo";

import Nav from "./components/nav";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <></>
      <Routes>
        <Route path="/" element={<Mycomponent />}></Route>
        <Route path="/country" element={<PageTwo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
