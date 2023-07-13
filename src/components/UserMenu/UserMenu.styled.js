import styled, { keyframes } from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';

const out = keyframes`
0%{
    opacity: 0;
}

50%{
    opacity: 1;
}
100%{
    transform: translateX(75%);
    opacity: 0;

}
`;

export const Username = styled.p`
  font-size: 20px;
  line-height: 1.15;
  color: #dff6ff;
`;

export const LogOutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: border 250ms linear, box-shadow 250ms linear;

  :hover,
  :focus {
    border: 1px solid #dff6ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
  :hover > svg,
  :focus > svg {
    color: #47b5ff;
    transition: color 250ms linear;
    animation: ${out} 1.5s linear infinite;
  }
`;

export const IconLogOut = styled(LogoutIcon)`
  color: #dff6ff;
  :hover {
    color: currentColor;
  }
`;
