import styled from 'styled-components';

export const Text = styled.p`
  font-family: 'Handlee', cursive;
  font-size: 24px;

  background: rgb(255, 226, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 226, 0, 1) 25%,
    rgba(0, 255, 218, 1) 50%,
    rgba(0, 5, 255, 1) 75%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
