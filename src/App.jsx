import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Meme from "./component/Meme"

function App() {
  return (
    <>
      <Header/>
      <Meme/>
    </>
  );
}

export default App;
