import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import Contact from './Contact';

class ContactList extends Component{


  render(){
      console.log('Props from contactlist.js: ', this.props);
    let theContacts = this.props.contacts.map(contact =>{
      <col md={4} >
        <Contact contact={contact} />
      </col>
    })
    return(
      <Container>
        <Row>
          {theContacts}
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps, null)(ContactList) ;
