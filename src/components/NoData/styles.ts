import styled from 'styled-components';
import { ReactComponent as Icon } from "../../assets/empty.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem 2rem 4rem;
  gap: 1rem;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 1rem;
`;


export const EmptyIcon = styled(Icon).attrs({
  height: "100%",
})`     
  fill: var(--gray-900);
  width: 4rem;
`;