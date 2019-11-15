import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import NavBar from './components/navbar'
import Login from './components/session'
import Footer from './components/footer'
import About from './components/about_us'
import Contact from './components/contact_us'
import Home from './components/dashboard'

import './App.css'

class App extends React.Component{
  render(){
    return(
			<Router>
				<NavBar/>
				<Switch>
					<Route exact path="/" component={Login}></Route>
					<Route exact path="/home" component={Home}></Route>
					<Route exact path="/about_us" component={About}></Route>
					<Route exact path="/contact_us" component={Contact}></Route>
					<Route exact path="/home" component={Home}></Route>
				</Switch>
				<Footer/>
			</Router>
		);
  }
}

export default App;
