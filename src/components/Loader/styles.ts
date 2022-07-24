import styled from 'styled-components';
import { ReactComponent as IconLoading } from "../../assets/loading.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
`;

export const LoadingIcon = styled(IconLoading).attrs({
  height: "100%",
})`     
  fill: var(--green);
  width: 3rem;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg); 
    }
  }

  animation: rotation 1s infinite linear;
`;