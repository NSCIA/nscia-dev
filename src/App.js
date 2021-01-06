import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Pages/Home/FirstSection/Header';
import './Components/Styles/index.scss'
import ImageSlider from './Components/Pages/Home/FirstSection/ImageSlider';
import NewsAndLectures from './Components/SecondSection/NewsAndLectures';
import ProjectSlide from './Components/Pages/Home/ThirdSection/ProjectSlide';
import MapSection from './Components/Pages/Home/FourthSection/MapSection';
import "antd/dist/antd.css"
import Publications from './Components/Pages/Home/FifthSection/Publications';
import Footer from './Components/Layout/Footer';

function App() {
  return (
    <div className="App">
       <Router>
        <Header />
        <Switch>
          <Route exact path="/" className="home">
            <ImageSlider />
            <NewsAndLectures />
            <ProjectSlide />
            <MapSection />
            <Publications />
          </Route>
          <Route path="/about">
          </Route>
          <Route path="/dashboard">
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
