import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  FormBlock,
  InputBlock,
  InputLabel,
  Input,
  Button,
} from './ContactForm.styled';
import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contactsAPI';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [createContact] = useCreateContactMutation();

  const changeName = e => setName(e.target.value);
  const changePhone = e => setPhone(e.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      phone,
      id: nanoid(),
    };
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : createContact(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <FormBlock onSubmit={handleSubmit}>
      <InputBlock>
        <InputLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={changeName}
            placeholder="Name"
          />
        </InputLabel>

        <InputLabel>
          Phone
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={changePhone}
            placeholder="+0-00-00-00"
          />
        </InputLabel>
      </InputBlock>

      <Button type="submit">Add contact</Button>
    </FormBlock>
  );
}
