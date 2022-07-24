import { useCallback, useEffect, useState } from 'react';
import {
  Container,
  UserDisplay,
  UserData
} from './styles';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

import { Loader } from '../../components/Loader';
import { IUser } from '../../interfaces/user';
import { IRepository } from '../../interfaces/repository';
import { RepoCard } from '../../components/RepoCard';


export function UserProfile() {

  const { nickname } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({} as IUser);
  const [repoList, setRepoList] = useState<IRepository[]>([]);

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const userRequest = api.get(`/users/${nickname}`);
      const repoRequest = api.get(`users/${nickname}/repos?page=1&per_page=10`);

      let response = await axios.all([userRequest, repoRequest])

      // let response = await api.get(`/users/${nickname}`);
      setUserData(response[0].data);
      setRepoList(response[1].data);
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
        <img src={userData.avatar_url} alt="User Profile" />
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
      {
        repoList.map(repo => (
          <RepoCard
            key={repo.id}
            repo={repo}
          />
        ))
      }
    </Container>
  )
}