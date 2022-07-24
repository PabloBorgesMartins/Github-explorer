import React, { forwardRef } from 'react';
import {
  Container,
} from './styles';

interface LastElementProps extends React.HTMLAttributes<HTMLElement> {
  isVisible: boolean;
}

const LastElement = (props: LastElementProps, ref: React.ForwardedRef<HTMLElement>) => (
  <Container ref={ref} {...props} />
)

export default forwardRef(LastElement);