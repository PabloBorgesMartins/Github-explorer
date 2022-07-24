import { useCallback, useEffect, useState } from 'react';
import {
  Container,
  Content,
  Title,
} from './styles';
import { Input } from '../../components/Input';
import { UserCard } from '../../components/UserCard';
import { IUserListed } from '../../interfaces/user';
import { api } from '../../services/api';

export function Home() {

  const [userList, setUserList] = useState<IUserListed[]>([]);
  const [pageIndex, setPageIndex] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      let response = await api.get(`/users?since=${pageIndex}&per_page=10`);
      setUserList(data => [...data, ...response.data]);
    } catch (error) {
      console.log("Erro ao buscar users", error);
    }
  }, [pageIndex, userList, setUserList])

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("userList agora", userList)
  // }, [userList])

  return (
    <Container>
      <Content>
        <Title>Explore repositórios<br />no Github.</Title>
        <Input className="search-input" />
        {
          userList.map(user => (
            <UserCard key={user.html_url} />
          ))
        }
      </Content>
    </Container>
  )
}