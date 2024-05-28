import Main from "./main";
import Navbar from "./navbar";
import "./style.css";
import Footer from './footer'
import {useEffect} from 'react';
import { Outlet } from "react-router-dom";

function App(props) {
  useEffect(() => {
    // const disableRightClick = (event) => {
    //   event.preventDefault();
    // };

    // document.addEventListener('contextmenu', disableRightClick);

    // return () => {
    //   document.removeEventListener('contextmenu', disableRightClick);
    // };
  }, []);
  
  return (
    <div className="App">
     <Navbar/>
      {/* Home Page */}
     <Outlet/>
     <Footer/>
    </div>
  );
}

export default App;
