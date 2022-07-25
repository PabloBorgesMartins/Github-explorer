import { useCallback, memo } from 'react';
import {
  Container,
  UserImage,
  UserInfo,
  ArrowIcon
} from './styles';
import { useNavigate } from 'react-router-dom';
import { IUserListed } from '../../interfaces/user';

interface UserCardProps {
  user: IUserListed;
}

function UserCard({ user }: UserCardProps) {

  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate(`/user/${user.login}`);
  }, [user, navigate]);

  return (
    <Container
      onClick={handleNavigate}
    >
      <UserImage
        src={user.avatar_url}
        alt="user"
      />
      <UserInfo>
        <p>{user.login}</p>
        <span>{user.html_url}</span>
      </UserInfo>
      <ArrowIcon />
    </Container>
  )
}

export default memo(UserCard);