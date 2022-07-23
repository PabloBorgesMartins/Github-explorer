import styled from 'styled-components';
import { ReactComponent as Icon } from "../../assets/logo.svg";

export const Container = styled.div`

`;

export const StyledIcon = styled(Icon).attrs({
    height: "auto",
  })`     
  fill: var(--gray-900);
  width: 2rem;
`;