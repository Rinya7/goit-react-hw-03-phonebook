import { Container } from './App.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleContactSubmits = ({ name, number }) => {
    const simpleContact = this.state.contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
        contact.number === number
    );

    if (simpleContact) {
      return alert(`${name} or ${number} is already in contacts`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(previus => {
      return {
        contacts: [contact, ...previus.contacts],
      };
    });
  };

  filterState = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(previus => ({
      contacts: previus.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactsForm onSubmitForm={this.handleContactSubmits} />
        <h2>Contacts</h2>
        <Filter filter={filter} filterForm={this.filterState} />
        <ContactList
          contacts={this.filterByName()}
          buttonDelete={this.deleteContact}
        />
      </Container>
    );
  }
}

export { App };
