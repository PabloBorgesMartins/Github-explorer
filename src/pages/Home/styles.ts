import styled from 'styled-components';
import { ReactComponent as Icon } from "../../assets/logo.svg";

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 980px;

  @media(max-width: 1024px){
    padding: 0 2rem;
  }
`;

export const Content = styled.div`;
  max-width: 720px;
`;

export const Title = styled.h1`;
  font-size: 3rem;
  color: var(--gray-700);
  font-weight: 700;
`;

export const StyledIcon = styled(Icon).attrs({
    height: "auto",
  })`     
  fill: var(--gray-900);
  width: 2rem;
`;