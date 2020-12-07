import React, { Component } from 'react';
import styles from './App.module.css';
import Form from './Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  filterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={styles.Phonebook}>
        <h1 className={styles.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.filterChange}
          className="Filter"
        />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
          className="ContactsList"
        />
      </div>
    );
  }
}

export default App;
