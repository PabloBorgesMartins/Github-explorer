import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 980px;

  @media(max-width: 1024px){
    padding: 0 2rem;
  }

  a{
    + a{
      margin-top: 1rem;
    }
  }
`;

export const UserDisplay = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  @media(max-width: 640px){
    flex-direction: column;
    text-align: center;
  }

  img{
    border-radius: 100%;
    width: 7.5rem;
    aspect-ratio: 1;
    object-fit: cover;
  }

  div{
    h1{
      color: var(--gray-650);
      font-weight: 700;
      font-size: 2.25rem;
      word-break: break-word;
    }
    p{
      color: var(--gray-400);
      font-weight: 400;
      font-size: 1.25rem;
    }
  }
`;

export const UserData = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  margin: 2rem 0;

  @media(max-width: 640px){
    gap: 2rem;
    text-align: center;
    justify-content: center;
  }

  div{
    h1{
      color: var(--gray-650);
      font-weight: 700;
      font-size: 2.25rem;

      @media(max-width: 640px){
        font-size: 1.5rem;
      }
    }
    p{
      color: var(--gray-500);
      font-weight: 400;
      font-size: 1.25rem;

      @media(max-width: 640px){
        font-size: 0.75rem;
      }
    }
  }
`;
