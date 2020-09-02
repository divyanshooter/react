import React from "react";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar";
import "./App.css";

function App() {
  return (
    // BEM Naming Convention for css class name
    <div className="app">
      <Header />
      <div classname="app__body">
         <SideBar/>
        {/* feed */}
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
