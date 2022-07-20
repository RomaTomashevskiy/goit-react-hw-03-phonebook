import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactListItem = ({ listContacts , onDeleteContact}) => (listContacts.map(({ id, name, number }) => {
  return  <li key={id} className={css.item}>
      <p>{name}: {number} </p>
      
    <button
      className={css.list_btn}
      type="button"
      onClick={() => onDeleteContact(id)}
    >Delete</button>
    </li>
}));

ContactListItem.propTypes = {
  listContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,

  })),
  
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactListItem;