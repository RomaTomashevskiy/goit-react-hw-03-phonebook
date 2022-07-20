import PropTypes from 'prop-types';
import ContactListItem from "./ContactListItem";

function ContactList({ listContacts , onDeleteContact}) {
    return <ul>
        <ContactListItem listContacts={listContacts} onDeleteContact={onDeleteContact} />
    </ul>
};

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;