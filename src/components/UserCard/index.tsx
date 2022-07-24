import {
  Container,
  UserImage,
  UserInfo,
  ArrowIcon
} from './styles';
import { IUserListed } from '../../interfaces/user';

interface UserCardProps {
  user: IUserListed;
}

export function UserCard({ user }: UserCardProps) {

  return (
    <Container>
      <UserImage
        src={user.avatar_url}
      />
      <UserInfo>
        <p>{user.login}</p>
        <span>{user.html_url}</span>
      </UserInfo>
      <ArrowIcon />
    </Container>
  )
}