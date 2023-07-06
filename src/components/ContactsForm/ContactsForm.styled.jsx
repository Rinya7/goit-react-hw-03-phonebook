import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 448px;
  background: white;
  border-radius: 4px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
`;

export const FildInput = styled.input`
  display: block;
  font-size: 16px;
  ${'' /*line-height: 28px;*/}
  padding: 8px 16px;
  width: 100%;
  ${'' /*min-height: 44px;*/}
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  margin-top: 20px;
`;

export const Div = styled.div`
  margin-bottom: 40px;
`;
