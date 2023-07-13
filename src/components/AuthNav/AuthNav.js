import { StyledLink } from 'components/SharedLayout/SharedLayout.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/login">Log in</StyledLink>
      <StyledLink to="/register">Sing up</StyledLink>
    </div>
  );
};
