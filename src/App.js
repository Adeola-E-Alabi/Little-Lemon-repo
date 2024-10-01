import "./App.css";
import Home from './pages/home.js';
import Header from './Components/header.js'
import {Route, Routes} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Reservations from "./pages/Reservations.js";

function App() {

  return (
    <>
      <div>
        <Header/>
      </div>
      <>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Reservations" element = {<Reservations/>}/>
        </Routes>
      </>
    </>
  );
}

export default App;
