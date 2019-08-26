import React from 'react';
import './App.css';
import Layout from './Components/UI/Layout/Layout';
import ClockHolder from './Container/ClockHolder/ClockHolder';

function App() {
  return (
    <div className="App">
      <Layout>
        <ClockHolder/>
      </Layout>
    </div>
  );
}

export default App;
