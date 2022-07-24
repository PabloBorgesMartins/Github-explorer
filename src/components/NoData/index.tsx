import {
  Container,
  EmptyIcon,
  Text
} from './styles';

interface NoDataProps {
  text: string;
}

export function NoData({ text }: NoDataProps) {

  return (
    <Container>
      <EmptyIcon />
      <Text>
        {text}
      </Text>
    </Container>
  )
}