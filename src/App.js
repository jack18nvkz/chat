import React from "react";
import "./styles/App.css";
import LeftBar from "./components/UI/left_bar/leftBar";
import RightBarChat from "./components/UI/right_bar_chat/rightBarChat";

function App() {

  return (
    <div className="App">
        <LeftBar/>
        <RightBarChat />
    </div>
  );
}

export default App;
