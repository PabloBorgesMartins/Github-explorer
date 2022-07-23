import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 4rem;
  background: red;
  border-radius: 5px;
  overflow: hidden;
  background: var(--white);

  input{
    width: 100%;
    border: 0;
    padding: 0 1rem;
    border: 2px solid transparent;
    outline: none;

    font-size: 1.125rem;

    &::placeholder{
      font-weight: 400;
      color: var(--gray-300);
    }

    :focus, &:hover{
      border-color: var(--green);
    }
  }
`;

export const Button = styled.button`
  background: var(--green);
  border: 0;
  padding: 0 2rem;

  color: var(--white);
  font-weight: 700;
  font-size: 1.125rem;

  &:hover{
    transition: filter 0.2s;
    filter: brightness(0.9);
  }
`;