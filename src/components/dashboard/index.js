import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Jumbotron, Container, Alert } from 'react-bootstrap';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message : null,
      logged_in :false
    };
  }

  componentDidMount = () =>{
    document.title = "Home"
    if(localStorage.getItem("user_token")){
      this.setState({message: "SuccessFully Logged In..", logged_in: true })
    }
  }

  render(){
    return(
      <>
        { this.state.message ? <Alert variant="success">{this.state.message}</Alert> : null }
        <Jumbotron fluid className="jumbo">
          <Container>
          <h2>Dashboard</h2>
            <p>
              This is home page of dashboard...
            </p>
          </Container>
        </Jumbotron>
      </>
    );
  }
}

export default Home
