import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact } from 'redux/contacts/operations';
import { selectorContacts, selectorFilter } from 'redux/contacts/selectors';
import { toast } from 'react-hot-toast';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Title } from 'pages/Login/Login.styled';
import { Loader } from 'components/Loader/Loader';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContact = (name, number) => {
    const checkedContact = contactCheck(name);
    if (checkedContact !== undefined) {
      return toast.error(`${name} is already in the contact list`);
    }
    dispatch(addContact({ name, number }));
    toast.success('You have added a new contact');
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  function contactCheck(value) {
    return contacts.find(
      contact => contact.name.toLowerCase() === value.toLowerCase()
    );
  }

  return (
    <main>
      <ContactForm onSubmit={addNewContact} />
      {contacts.length === 0 ? (
        <Title>Your contacts list is empty</Title>
      ) : (
        <>
          <Title>Contact list</Title>
          <Filter />
          <ContactList contacts={filteredContacts()} />
        </>
      )}
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
    </main>
  );
};
export default Contacts;
