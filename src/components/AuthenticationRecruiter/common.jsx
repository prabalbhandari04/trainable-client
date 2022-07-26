import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
margin-top : 15px;
  font-size: 15px;
  color: #774dd1;
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 15px;
  color: #774dd1;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(15, 15, 15, 0.19);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: #774dd1;
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(15, 15, 15, 0.19);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #0b2652;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #0b2652;
  

  &:hover {
    filter: brightness(1.03);
  }
`;
