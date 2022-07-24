import {
  Container,
} from './styles';
import { useParams } from 'react-router-dom';

interface UserProfileProps {

}

export function UserProfile() {

  const { nickname } = useParams();

  return (
    <Container>
      eae {nickname}
    </Container>
  )
}