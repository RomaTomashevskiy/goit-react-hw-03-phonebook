import React, { Component } from "react";
import shortid from "shortid";
import Container from "./Container";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import contacts from '../data/contacts.json'
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts, 
    filter:''
  };

  formSubmit = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const onFindName = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    const onFindNum = this.state.contacts.find(contact => contact.number.toLowerCase() === number.toLowerCase());

    if (onFindName) {
      alert(`${name} is already in contacts.`)
    } else if (onFindNum) {
      alert(`${number} is already in contacts.`)
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts]
      }));
    };
  };


  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }; 

  onDeleteContact = index => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== index)
    }));
  };

  onFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalize = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalize));
  };


  componentDidMount() {
     const parceContacts = JSON.parse(localStorage.getItem('contact'));

     if (parceContacts) {
      this.setState({contacts: parceContacts})
     };
  };

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contact', JSON.stringify(contacts));
    };
  };


  render() {
    const { filter } = this.state;
    const filterContacts = this.onFilterContacts();
    
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h1>Contacts</h1>
        <Filter value={filter} onChange={this.onChangeFilter} />
        <ContactList listContacts={filterContacts} onDeleteContact={this.onDeleteContact} />
      </Container>
    )
  }

} 


export default App;