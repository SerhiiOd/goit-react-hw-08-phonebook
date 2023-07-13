import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  // background: #000;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px;
  margin-bottom: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #434647;
  box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25);
  -webkit-box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25);
  -moz-box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25);

  > nav,
  > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  text-decoration: none;
  font-size: 20px;
  line-height: 1.15;
  color: #ff7c00;
  transition: border 250ms linear, box-shadow 250ms linear,
    background 250ms linear;

  &.active {
    font-weight: 700;
    color: white;
    background: #949595;
    border: 1px solid #dff6ff;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
  :hover:not(.active),
  :focus:not(.active) {
    border: 1px solid #dff6ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Logo = styled.p`
  font-family: 'Handlee', cursive;
  font-size: 48px;
  line-height: 64px;
  color: #30ff00;
  margin-left: auto;
  margin-right: auto;
`;
export const LogoBlack = styled.span`
  color: #ff7c00;
`;
