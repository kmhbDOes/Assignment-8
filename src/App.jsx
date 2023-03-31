import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import BonusQ from "./components/BonusQ/BonusQ";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

function App() {
  const [displayTime, setDisplayTime] = useState(0);
  const [displayTitle, setDisplayTitle] = useState("");
  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const totalReadTime = parseInt(previousReadTime) + parseInt(time);
      localStorage.setItem("readTime", totalReadTime);
      setDisplayTime(totalReadTime);
    } else {
      localStorage.setItem("readTime", time);
      setDisplayTime(time);
    }
  };
  const handleTitle = (title) => {
    const previousTitle = JSON.parse(localStorage.getItem("title"));
    setDisplayTitle(title);
  };
  return (
    <div className="App">
      <Header></Header>
      <hr className="mt-6 h-6" />
      <div className="grid grid-cols-1 md:flex md:flex-none">
        <div className="flex-1 ">
          <Home
            handleReadTime={handleReadTime}
            handleTitle={handleTitle}
          ></Home>
        </div>

        <div className="flex-shrink-0 w-1/4 mx-4 ">
          <SideCart
            displayTime={displayTime}
            displayTitle={displayTitle}
          ></SideCart>
        </div>
      </div>
      <BonusQ></BonusQ>
    </div>
  );
}

export default App;
