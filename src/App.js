import Main from "./main";
import Navbar from "./navbar";
import "./style.css";
import Footer from './footer'
import {useEffect} from 'react';

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
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
