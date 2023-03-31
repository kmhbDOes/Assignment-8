import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideCart from "./components/SideCart/SideCart";

function App() {
  const [displayTime, setDisplayTime] = useState(0);
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
  return (
    <div className="App">
      <Header></Header>
      <hr className="w-full mt-6 h-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <Home handleReadTime={handleReadTime} displayTime={displayTime}></Home>
        <SideCart displayTime={displayTime}></SideCart>
      </div>
    </div>
  );
}

export default App;
