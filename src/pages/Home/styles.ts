import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 980px;

  @media(max-width: 1024px){
    padding: 0 2rem;
  }
`;

export const Content = styled.div`;
  max-width: 720px;

  .search-input{
    margin: 2rem 0 4rem;
  }
`;

export const Title = styled.h1`;
  font-size: 3rem;
  color: var(--gray-700);
  font-weight: 700;
`;