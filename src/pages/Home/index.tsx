import {
  Container,
  Content,
  Title,
} from './styles';
import { Input } from '../../components/Input';

export function Home() {

  return (
    <Container>
      <Content>
        <Title>Explore repositórios<br />no Github.</Title>
        <Input />
      </Content>
    </Container>
  )
}