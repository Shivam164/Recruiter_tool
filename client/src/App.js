import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notification from './components/Notification';
import {NotificationContext} from './Contexts/GlobalState';
import { useContext } from 'react';
import AddCandidate from './pages/AddCandidate';
import EditDetails from './pages/EditDetails';

function App() {

  const { isNotificationVisible, notificationColor, notificationMessage } = useContext(NotificationContext);

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}/>
          <Route exact path = "/add" element={<AddCandidate/>}/>
          <Route path = "/edit/:id" element={<EditDetails/>}/>
        </Routes>
      </div>
      {isNotificationVisible && (
        <Notification
          type={notificationColor}
          message={notificationMessage}
        />
      )}
    </Router>
  );
}

export default App;
