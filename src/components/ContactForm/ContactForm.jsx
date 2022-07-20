import React, { Component } from "react";
import PropTypes from 'prop-types';
import shortid from "shortid";
import css from './ContactForm.module.css';


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      
    };

    nameId = shortid.generate();
    numberId = shortid.generate();

    onSumbit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

 

    reset = () => {
        this.setState({ name: '', number: '' })
    };

    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value })
    };

    render() {
        const { name, number } = this.state;
        
        return (
            <form onSubmit={this.onSumbit} className={css.form}>
                <label htmlFor={this.nameId} className={css.label_name}>
                    Name
                    <input
                        className={css.input_name}
                        id={this.nameId}
                        value={name}
                        onChange={this.handleInputChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>

                <label htmlFor={this.numberId} className={css.label_number}>
                    Number
                    <input
                        className={css.input_number}
                        id={this.numberId}
                        value={number}
                        onChange={this.handleInputChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit" className={css.btn_form}>Add Contact</button>
            </form>
        )
    }
};



ContactForm.prototypes = {
    onSubmit:PropTypes.func.isRequired
}

export default ContactForm