import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';
import { toast } from 'react-hot-toast';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'passwordConfirm':
        setPasswordConfirm(value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if (password.toLowerCase() !== passwordConfirm.toLowerCase()) {
      return toast.error("Passwords didn't match. Please try again");
    }
    dispatch(
      register({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        password: password.trim(),
      })
    );
    resetForm();
  };

  function resetForm() {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  }

  return (
    <>
      <Box
        component="form"
        sx={{ maxWidth: '400px', margin: '0 auto' }}
        autoComplete="on"
        onSubmit={onFormSubmit}
      >
        <TextField
          onChange={onInputChange}
          value={name}
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          type="text"
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
          value={email}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          onChange={onInputChange}
          value={password}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password (seven or more characters )"
          type="password"
          id="password"
          inputProps={{
            pattern: '.{7,}',
            title: 'seven or more characters',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          onChange={onInputChange}
          value={passwordConfirm}
          margin="normal"
          required
          fullWidth
          name="passwordConfirm"
          label="Confirm password"
          type="password"
          id="passwordConfirm"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};
