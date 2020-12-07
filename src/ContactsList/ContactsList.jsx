import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.ContactsList}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={styles.item}>
            <span className={styles.name}>{name}:</span>
            <span className={styles.number}>{number}</span>
            <button
              onClick={() => onDeleteContact(id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;
ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
