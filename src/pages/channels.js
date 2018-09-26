import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import withFirebaseAuth from "react-auth-firebase";
import "./channels.css";
import firebase from "./firebase";
import YouTube from 'react-youtube';
import Header from "./components/header/header";
import Player from "./components/player/player";



const BasicExample = () => (

  

  <Router>
    <div>
    <Header/>

      <Route exact path="/" component={Channels} />
      <Route path="/player" component={playerWindow} />
    </div>
  </Router>
);


const Channels = () => (
  <div>
  <div className="news">
  <h2><mark>News</mark></h2>
  <h3>Muller Investigation releases big news.</h3>
  <h4>Publisher: CNN</h4>
  <Link to="/player"><button className="watch">Watch</button></Link>
  </div>

  <div className="entertainment">
  <h2><mark>Entertainment</mark></h2>
  <h3>New Trailer released for Captain Marvel.</h3>
  <h4>Publisher: Marvel Entertainment</h4>
  <button className="watch">Watch</button>
  </div>
  </div>
);

const playerWindow = () => (
  <div>
<Player/>
  </div>
);


export default BasicExample;
