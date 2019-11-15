import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import './index.css'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

class NavBar extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			logged_in:false
		};
	}

	componentDidMount = () => {
		if (localStorage.getItem("user_token")){
			this.setState({logged_in: true})
		}
		else{
			this.setState({logged_in:false})
		}
	}

	render(){
		return(
			<>
			  <Navbar bg="dark" expand="lg" >
				  <Navbar.Brand href="/">
				  	<img
			        src="/logo192.png"
			        width="30"
			        height="30"
			        className="d-inline-block align-top"
			      />
				  </Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Link to="/">Home</Link>
							{ this.state.logged_in ? <Link to="/home">Dashboard</Link> : null}
							{ this.state.logged_in ? <Link to="/contact_us">Contact</Link> : null}
							{ this.state.logged_in ? <Link to="/about_us">About</Link> : null}
							{this.state.logged_in ? <Link onClick={(e) =>
								 { localStorage.removeItem("user_token");
								 window.location.href='/'}}>Logout
							</Link> : null}
				    </Nav>
						{ this.state.logged_in ?
				    <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				      <Button variant="outline-success">Search</Button>
				    </Form> : null }
				  </Navbar.Collapse>
				</Navbar>
				</>
		);
	}
}

export default NavBar;
