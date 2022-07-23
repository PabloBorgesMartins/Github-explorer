import styled from 'styled-components';
import { ReactComponent as IconLogo } from "../../assets/logo.svg";
import { ReactComponent as IconArrow } from "../../assets/arrow-right.svg";

export const Container = styled.div`
  margin: 2rem auto 3rem;
  max-width: 980px;

  @media(max-width: 1024px){
    padding: 0 2rem;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;

  >svg{
    margin-right: 0.75rem;
  }

  p{
    font-weight: 500;
    font-size: 1rem;
    color: var(--gray-700);
  }

  .font-light{
    color: var(--gray-400);
  }
`;

export const StyledLogo = styled(IconLogo).attrs({
  height: "auto",
})`     
  fill: var(--gray-900);
  width: 2rem;
`;

export const BackButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: 0;

  display: flex;
  align-items: center;

  color: var(--gray-300);
  font-weight: 700;
  font-size: 0.875rem;
`;

export const ArrowIcon = styled(IconArrow).attrs({
  height: "auto",
})`     
  fill: var(--gray-300);
  transform: rotateZ(180deg);
  width: 0.375rem;
  margin-right: 0.5rem;
`;