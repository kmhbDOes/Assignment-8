import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <hr className="w-full mt-6 h-6" />
      <Home></Home>
    </div>
  );
}

export default App;
