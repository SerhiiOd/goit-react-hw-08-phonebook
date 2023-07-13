import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <>
      <List>
        {contacts.map(contact => {
          const { id, number, name } = contact;
          return <Contact key={id} name={name} number={number} id={id} />;
        })}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
