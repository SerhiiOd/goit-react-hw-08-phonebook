import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { Username, LogOutBtn, IconLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => dispatch(logOut());

  return (
    <div>
      <Username>Welcome, {user.name}</Username>
      <LogOutBtn type="button" onClick={onLogOut}>
        <IconLogOut />
      </LogOutBtn>
    </div>
  );
};
