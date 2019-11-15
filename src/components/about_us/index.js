import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Jumbotron, Container} from 'react-bootstrap';
import './index.css';

class About extends React.Component{
  render(){
    return(
      <Jumbotron fluid className="jumbo">
        <Container>
        <h2>About Us</h2>
          <p>
            This is about us page...
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default About
