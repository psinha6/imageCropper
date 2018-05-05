import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import App from "./App";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
        </div>
      </div>
        </HashRouter>
        </MuiThemeProvider>
    );
  }
}

export default Main;