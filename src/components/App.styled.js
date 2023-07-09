import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 15px;

  border: 1px solid orange;

  box-shadow: 0px 0px 55px 0px rgba(255, 128, 0, 0.75);
  -webkit-box-shadow: 0px 0px 55px 0px rgba(255, 128, 0, 0.75);
  -moz-box-shadow: 0px 0px 55px 0px rgba(255, 128, 0, 0.75);
`;

export const Section = styled.section`
  padding: 10px;

  box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25) inset;
  -webkit-box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25) inset;
  -moz-box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25) inset;
`;

export const Title = styled.h2`
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
