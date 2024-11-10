import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './StoriesList';
import StoryDetail from './SoryDetails';
// import Navbar from './Navbar';



function App() {
  return (<>
    {/* <Navbar /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<StoryDetail />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;