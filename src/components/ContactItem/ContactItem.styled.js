import styled from '@emotion/styled';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: rgb(255, 0, 170);
  background: radial-gradient(
    circle,
    rgba(255, 0, 170, 0.7987570028011204) 5%,
    rgba(254, 79, 36, 1) 25%,
    rgba(254, 255, 0, 1) 50%,
    rgba(220, 255, 0, 1) 75%,
    rgba(104, 255, 0, 1) 95%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Button = styled.button`
  width: 75px;

  padding: 5px;

  margin-top: 10px;

  border-radius: 5px;
  border: 1px solid orange;

  background: rgb(255, 226, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 226, 0, 1) 25%,
    rgba(0, 255, 218, 1) 50%,
    rgba(0, 5, 255, 1) 75%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    width: 90px;

    box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25);
    -webkit-box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25);
    -moz-box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25);
  }
`;
