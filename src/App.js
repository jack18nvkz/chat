import React, {useState} from "react";
import "./styles/App.css";
import LeftBar from "./components/UI/left_bar/leftBar";
import RightBarChat from "./components/UI/right_bar_chat/rightBarChat";
import message from "./components/UI/message/message";

const ws = new WebSocket('ws://localhost:9090');

ws.onopen = e => {
    alert('Connected to server');
}

ws.onmessage = message => {
    alert(message.data);
}

function App() {

  return (
    <div className="App">
        <LeftBar/>
        <RightBarChat />
    </div>
  );
}

export default App;
