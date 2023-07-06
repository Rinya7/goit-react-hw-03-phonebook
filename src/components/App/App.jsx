import { Container } from './App.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('thisStat'));
    if (localContacts)
      this.setState({
        contacts: JSON.parse(localStorage.getItem('thisStat')),
      });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('thisStat', JSON.stringify(this.state.contacts));
    }
  }

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
