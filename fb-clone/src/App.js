import React from "react";
import Login from "./components/login/Login";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Feed from "./components/feed/feed";
import Widgets from "./components/widgets/Widgets";
import "./App.css";
import { useStateValue } from "./State/StateProvider";

function App() {
  const [{user},dispatch]=useStateValue();
  return (
    // BEM Naming Convention for css class name
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
