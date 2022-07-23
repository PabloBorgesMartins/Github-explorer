import {
  Container,
  Button
} from './styles';

type InputProps = JSX.IntrinsicElements['input']

export function Input({ ...props }: InputProps) {

  return (
    <Container>
      <input
        {...props}
      />
      <Button>
        Pesquisar
      </Button>
    </Container>
  )
}