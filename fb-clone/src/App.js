import React from "react";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import Feed from './components/feed/feed';
import Widgets from './components/widgets/Widgets';
import "./App.css";

function App() {
  return (
    // BEM Naming Convention for css class name
    <div className="app">
      <Header />
      <div className="app__body">
         <SideBar/>
         <Feed/>
         <Widgets/>
      </div>
    </div>
  );
}

export default App;
