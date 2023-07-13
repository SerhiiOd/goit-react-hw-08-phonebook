import PropTypes from 'prop-types';
import { useState } from 'react';

import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Title } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetForm();
  };

  function resetForm() {
    setName('');
    setNumber('');
    return;
  }

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        maxWidth="600px"
        sx={{ margin: '0 auto' }}
        onSubmit={onFormSubmit}
      >
        <Title>Create new contact</Title>
        <TextField
          onChange={onInputChange}
          value={name}
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          size="small"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          onChange={onInputChange}
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          size="small"
          margin="normal"
          required
          fullWidth
          id="number"
          label="Number"
          name="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIphoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 4 }}
        >
          Add contact
        </Button>
      </Box>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
