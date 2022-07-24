import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  Content,
  Title,
} from './styles';
import { Input } from '../../components/Input';
import { UserCard } from '../../components/UserCard';
import { IUserListed } from '../../interfaces/user';
import { api } from '../../services/api';

import useIsElementVisible from "../../hooks/useIsElementVisible";

export function Home() {

  const [userList, setUserList] = useState<IUserListed[]>([]);
  const [pageIndex, setPageIndex] = useState(0);

  const fetchData = useCallback(async (val: number) => {
    try {
      setIsLoading(true);
      let response = await api.get(`/users?since=${val}&per_page=10`);
      setUserList(data => [...data, ...response.data]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Erro ao buscar users", error);
    }
  }, [pageIndex, userList, setUserList])

  const lastRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const isLastVisible = useIsElementVisible(lastRef.current);

  useEffect(() => {
    fetchData(0);
  }, []);

  useEffect(() => {
    if (isLastVisible && (userList.length > 0)) {
      fetchData(userList[userList.length - 1].id);
    }
  }, [isLastVisible]);

  return (
    <Container>
      <Content>
        <Title>Explore repositórios<br />no Github.</Title>
        <Input className="search-input" />
        {
          userList.map(user => (
            <UserCard
              key={user.html_url}
              user={user}
            />
          ))
        }
        {isLoading && <p>Loading...</p>}
        <div ref={lastRef} />
      </Content>
    </Container>
  )
}