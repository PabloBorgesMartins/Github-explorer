import styled, { css } from 'styled-components';
import { ReactComponent as Icon } from "../../assets/x-icon.svg";

interface SearchTagProps {
  isVisible: boolean;
}

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
    margin: 2rem 0 1rem;
  }

  div{
    + div{
      margin-top: 1rem;
    }
  }
`;

export const Title = styled.h1`;
  font-size: 3rem;
  color: var(--gray-700);
  font-weight: 700;
`;

export const SearchTag = styled.button<SearchTagProps>`;
  display: flex;
  align-items: center;

  border: 0;
  border-radius: 1rem;
  background: var(--gray-700);
  margin-bottom: 3rem;
  padding: 0.25rem 0.5rem;

  color: var(--white);
  font-size: 1rem;

  visibility: hidden;
  ${props => props.isVisible && css`
    visibility: visible;
  `}

  &:hover{
    transition: opacity 0.2s;
    opacity: 0.5;
  }
`;

export const XIcon = styled(Icon).attrs({
  height: "100%",
})`     
  fill: var(--white);
  width: 1rem;
  margin-left: 0.5rem;
`;
