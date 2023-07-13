import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Handlee', cursive;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;

  background: rgb(255, 59, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 59, 0, 1) 25%,
    rgba(52, 255, 0, 1) 50%,
    rgba(198, 255, 0, 1) 75%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
