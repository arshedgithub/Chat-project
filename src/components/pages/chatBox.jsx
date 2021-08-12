import React from "react";
import { ChatEngine } from "react-chat-engine";
import NavBar from "./../navbar";

const ChatBox = () => {
  return (
    <div>
      <NavBar />
      <div>chat box</div>
      <ChatEngine
        height="calc(100vh-50px)"
        projectId="261a29c2-7f71-447b-b948-cb15320190a9"
        username="."
        userSecret="."
      />
    </div>
  );
};

export default ChatBox;
