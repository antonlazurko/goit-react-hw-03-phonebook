import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';
class Form extends Component {
  state = { name: '', number: '', id: '' };
  handleFormChange = event => {
    const contactId = uuidv4();
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value, id: contactId });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.Form}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleFormChange}
            className={styles.input}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            value={this.state.number}
            name="number"
            onChange={this.handleFormChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;
Form.propTypes = {
  onSubmit: PropTypes.func,
};
