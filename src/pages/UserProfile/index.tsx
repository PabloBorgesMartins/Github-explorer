import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  UserDisplay,
  UserData,
} from './styles';

import axios from 'axios';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import useIsElementVisible from '../../hooks/useIsElementVisible';

import { Loader } from '../../components/Loader';
import { RepoCard } from '../../components/RepoCard';

import { IRepository } from '../../interfaces/repository';
import { IUser } from '../../interfaces/user';
import LastElement from '../../components/LastElement';

export function UserProfile() {

  const { nickname } = useParams();

  const lastRef = useRef(null);
  const isLastVisible = useIsElementVisible(lastRef?.current);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMoreContent, setIsLoadingMoreContent] = useState(false);
  const [userData, setUserData] = useState({} as IUser);
  const [repoList, setRepoList] = useState<IRepository[]>([]);

  const fetchInitial = useCallback(async () => {
    try {
      setIsLoading(true);
      const userRequest = api.get(`/users/${nickname}`);
      const repoRequest = api.get(`users/${nickname}/repos?page=1&per_page=10`);
      let response = await axios.all([userRequest, repoRequest])
      setUserData(response[0].data);
      setRepoList(response[1].data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Erro fetchInitial", error);
    }
  }, [nickname, setRepoList, setUserData, setIsLoading]);

  useEffect(() => {
    fetchInitial();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setIsLoadingMoreContent(true);
      let response = await api.get(`users/${nickname}/repos?page=${(repoList.length / 10) + 1}&per_page=10`);
      setRepoList([...repoList, ...response.data]);
      setIsLoadingMoreContent(false);
    } catch (error) {
      setIsLoadingMoreContent(false);
      console.log("Erro ao buscar users", error);
    }
  }, [repoList, setRepoList, nickname, setIsLoadingMoreContent]);

  useEffect(() => {
    if (isLastVisible && (repoList.length > 0) && (repoList.length < userData.public_repos)) {
      fetchData();
    }
  }, [isLastVisible]);

  return (
    <Container>
      {
        isLoading ? (
          <Loader />
        ) : (
          <>
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
          </>
        )
      }
      {
        repoList.map(repo => (
          <RepoCard
            key={repo.id}
            repo={repo}
          />
        ))
      }
      {isLoadingMoreContent && <Loader />}
      <LastElement
        ref={lastRef}
        isVisible={!!repoList.length}
      />
    </Container>
  )
}