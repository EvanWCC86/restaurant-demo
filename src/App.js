import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
  } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Backdrop from './components/Backdrop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage'
import ReservationPage from './pages/ReservationPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
const App = () => {

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Backdrop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/reservation" component={ReservationPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
