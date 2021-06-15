import React from "react";
import "./App.css";
import ContactsNavigationBar from "./components/ContactsNavigationBar";
import ChatBoxNavigationBar from "./components/ChatBoxNavigationBar";
import SearchBar from "./components/SearchBar";
import ContactsMenu from "./components/ContactsMenu";
import ChatArea from "./components/ChatArea";
import TypeMessageBar from "./components/TypeMessageBar";

function App() {
  return (
    <div className="App">
      <main>
        <div className="contacts-menu">
          <ContactsNavigationBar />
          <SearchBar />
          <ContactsMenu />
        </div>
        <div className="chat-box">
          <ChatBoxNavigationBar />
          <ChatArea />
          <TypeMessageBar />
        </div>
      </main>
    </div>
  );
}

export default App;
