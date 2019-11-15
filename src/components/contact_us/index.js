import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { Jumbotron, Container} from 'react-bootstrap';


class Contact extends React.Component{
  render(){
    return(
      <Jumbotron fluid className="jumbo">
        <Container>
        <h2>Contact Us</h2>
          <p>
            This is Contact us page...
          </p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Contact
