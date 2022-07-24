import {
  Container,
  UserDisplay,
  UserData
} from './styles';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Loader } from '../../components/Loader';
import { IUser } from '../../interfaces/user';

export function UserProfile() {

  const { nickname } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({} as IUser)

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true);
      let response = await api.get(`/users/${nickname}`);
      setUserData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Erro ao buscar users", error);
    }
  }, [nickname]);

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading)
    return <Loader />

  return (
    <Container>
      <UserDisplay>
        <img src={userData.avatar_url} alt="User Photo" />
        <div>
          <h1>{userData.login}/repo</h1>
          <p>{userData.name}</p>
        </div>
      </UserDisplay>
      <UserData>
        <div>
          <h1>{userData.following}</h1>
          <p>Seguindo</p>
        </div>
        <div>
          <h1>{userData.followers}</h1>
          <p>Seguidores</p>
        </div>
        <div>
          <h1>{userData.public_repos}</h1>
          <p>Repositórios</p>
        </div>
      </UserData>
    </Container>
  )
}