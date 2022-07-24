import styled, { css } from 'styled-components';

interface LastElementProps {
  isVisible: boolean;
}

export const Container = styled.section<LastElementProps>`;
  display: none;

  ${props => props.isVisible && css`
    display: block;
  `}
`;