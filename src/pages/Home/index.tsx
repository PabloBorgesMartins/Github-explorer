import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  Content,
  Title,
  LastElement
} from './styles';
import { Input } from '../../components/Input';
import { UserCard } from '../../components/UserCard';
import { IUserListed } from '../../interfaces/user';
import { api } from '../../services/api';
import { Loader } from '../../components/Loader';

import useIsElementVisible from "../../hooks/useIsElementVisible";

export function Home() {

  const [userList, setUserList] = useState<IUserListed[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const lastRef = useRef(null);
  const isLastVisible = useIsElementVisible(lastRef.current);

  const fetchData = useCallback(async (val: number) => {
    try {
      setIsLoading(true);
      let response = await api.get(`/users?since=${val}&per_page=10`);
      setUserList([...userList, ...response.data]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Erro ao buscar users", error);
    }
  }, [userList, setUserList]);

  useEffect(() => {
    fetchData(0);
  }, []);

  useEffect(() => {
    if (isLastVisible && (userList.length > 0)) {
      fetchData(userList[userList.length - 1].id);
    }
  }, [isLastVisible]);

  const search = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let response = await api.get(`/users/${e.target.searchInput.value}`);
      setUserList([response.data]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Erro ao buscar user", error);
    }
  }

  return (
    <Container>
      <Content>
        <Title>Explore repositórios<br />no Github.</Title>
        <form
          action="search"
          onSubmit={search}
        >
          <Input
            className="search-input"
            name="searchInput"
            type="text"
          />
        </form>
        {
          userList.map(user => (
            <UserCard
              key={user.html_url}
              user={user}
            />
          ))
        }
        {isLoading && <Loader />}
        <LastElement
          ref={lastRef}
          isVisible={!!userList.length}
        />
      </Content>
    </Container>
  )
}