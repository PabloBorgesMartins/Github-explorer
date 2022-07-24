import styled from 'styled-components';
import { ReactComponent as IconArrow } from "../../assets/arrow-right.svg";

export const Container = styled.a`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto min-content;
  grid-gap: 1rem;
  grid-template-areas:
    'repositoryInfo buttonArrow';

  padding: 1.5rem;
  border-radius: 5px;
  background: var(--white);
  cursor: pointer;

  text-decoration: none;

  &:hover{
    transition: transform 0.2s;
    transform: scale(1.02);
    box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.1);
  }
`;

export const RepositoryInfo = styled.div`
  grid-area: repositoryInfo;

  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  p{
    overflow: hidden;
    margin-bottom: 0.5rem;

    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--gray-650);
  }

  span{
    font-weight: 400;
    font-size: 1rem;
    color: var(--gray-300);
  }
`;

export const ArrowIcon = styled(IconArrow).attrs({
  height: "100%",
})`     
  grid-area: buttonArrow;
  fill: var(--gray-300);
  width: 1rem;

  &:hover{
    transition: fill 0.2s;
    fill: var(--green);
  }
`;