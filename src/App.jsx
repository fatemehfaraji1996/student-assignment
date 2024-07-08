import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Mycomponent from "./components/Flag";
import PageTwo from "./components/pageTwo";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useLocation } from "react-router-dom";
function App() {
//   const location = useLocation()
// const {item} = location.state || {} ;
// console.log(item);
  return (
    <BrowserRouter>
      {/* <Mycomponent /> */}
      <></>
      <Routes>
        <Route path="/" element={<Mycomponent />}></Route>
        <Route path="/tt" element={<PageTwo />}></Route>
        {/* <Route path="" element={""}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
