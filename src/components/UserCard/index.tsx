import {
  Container,
  UserImage,
  UserInfo,
  ArrowIcon
} from './styles';
import { useNavigate } from 'react-router-dom';
import { IUserListed } from '../../interfaces/user';
import { useCallback } from 'react';

interface UserCardProps {
  user: IUserListed;
}

export function UserCard({ user }: UserCardProps) {

  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(`/user/${user.login}`);
  }, [user]);

  return (
    <Container
      onClick={handleNavigate}
    >
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