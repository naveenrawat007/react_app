import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import './index.css';

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      loaded:false,
      logged_in:false,
      error: null,
      message: null,
      user: {
        email: '',
        password: ''
      }
    };
  }

  updateuser(event){
    const{ name, value } = event.target;
    this.setState({
      user: {
      ...this.state.user,
      [name]: value
      }
    });
  }

  login(event){
    event.preventDefault();


    this.setState({loaded:false});

    let url = process.env.REACT_APP_BACKEND_BASE_URL + process.env.REACT_APP_LOGIN_API_URL;
    console.log(url);

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': '*'
      },
      body: JSON.stringify({user: this.state.user})
    }).then(response => response.json()).then((result)=> {
      if (result.status ===200 ){
        localStorage.setItem('user_token', result.token);
        this.setState({loaded:true, error:null, logged_in: true, user: result.user});
      }
      else{
        this.setState({logged_in:false, loaded: true, error: result.message});
      }
    }, (error) => {
      this.setState({logged_in:false, loaded: true, error: error.message});
    });
  }


  componentDidMount(){
    document.title = "Login"
    this.setState({loaded: true});
  }

  render(){
    return(<>
      {
        this.state.logged_in ? window.location.href = '/home' : null
      }
      { this.state.error ? <Alert variant="danger">{this.state.error}</Alert> : null }
      <h2>Login Form</h2>
      <form className="login-form" onSubmit={(e) => {this.login(e) }}>
        <div className="form-group">
          <label>Email:</label><br/>
          <input type="text" name="email" placeholder="Email" className="form-control" onChange={(e) => {this.updateuser(e)}}/>
        </div>
        <div className="form-group">
          <label>Password:</label><br/>
          <input type="password" name="password" placeholder="password" className="form-control" onChange={(e) => {this.updateuser(e)}}/>
        </div>
        <div className="form-group">
          <Button type="submit" variant="outline-primary" disabled={!this.state.loaded}>Login</Button>
        </div>
      </form>
      </>
    );
  }
}

export default Login
