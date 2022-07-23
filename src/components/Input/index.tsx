import {
  Container,
  Button
} from './styles';

type InputProps = JSX.IntrinsicElements['input']

export function Input({ id, className, ...props }: InputProps) {

  return (
    <Container id={id} className={className}>
      <input
        {...props}
      />
      <Button>
        Pesquisar
      </Button>
    </Container>
  )
}