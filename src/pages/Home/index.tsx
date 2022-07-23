import {
  Container,
  Content,
  Title,
} from './styles';
import { Input } from '../../components/Input';
import { UserCard } from '../../components/UserCard';

export function Home() {

  return (
    <Container>
      <Content>
        <Title>Explore repositórios<br />no Github.</Title>
        <Input className="search-input" />
        <UserCard />
      </Content>
    </Container>
  )
}