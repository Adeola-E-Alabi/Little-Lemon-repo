import "./App.css";
import Home from './pages/home.js';
import Header from './Components/header.jsx'
import {Route, Routes} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Reservations from "./pages/Reservations.js";
import OrderOnline from "./Components/orderOnline.jsx"
import ConfirmedBooking from "./Components/ConfirmedBooking.jsx";
import { APIcontext } from "./context/APIcontext.jsx";
function App() {

  return (
    <>
      <div>
        <Header/>
      </div>
      <APIcontext>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Reservations" element = {<Reservations/>}/>
          <Route path = "/orderOnline" element = {<OrderOnline/>}/>
          <Route path = "/ConfirmedBooking" element = {<ConfirmedBooking/>}/>
        </Routes>
      </APIcontext>
    </>
  );
}

export default App;
