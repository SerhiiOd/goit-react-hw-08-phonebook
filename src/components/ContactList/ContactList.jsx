import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { List, Error } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactsSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsAPI';

const ContactList = () => {
  const { data = [] } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = id => deleteContact(id);

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
    <List>
      {contactsList.length > 0 ? (
        contactsList.map(({ id, name, phone }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={phone}
              onClick={handleDeleteContact}
            />
          );
        })
      ) : (
        <Error>
          <strong></strong>
        </Error>
      )}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
