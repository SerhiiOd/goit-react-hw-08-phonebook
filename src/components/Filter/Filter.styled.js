import styled from '@emotion/styled';

export const FilterBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  margin-left: 15px;

  border-radius: 5px;

  border: 2px solid orange;

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

  &:focus {
    outline: 2px solid #bb4115;

    box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25);
    -webkit-box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25);
    -moz-box-shadow: 0px 0px 35px 0px rgba(255, 128, 0, 0.25);
  }
`;

export const Text = styled.p`
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
