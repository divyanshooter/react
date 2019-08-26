import React from 'react';
import './App.css';
import Layout from './Components/UI/Layout/Layout';
import Clicker from './Container/Clicker/Clicker';
function App() {
  return (
    <div className="App">
       <Layout>
       <Clicker/>
       </Layout>
       
       
    </div>
  );
}

export default App;
