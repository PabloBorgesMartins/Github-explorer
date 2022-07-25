import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Container,
  Content,
  Title,
  SearchTag,
  XIcon
} from './styles';
import { api } from '../../services/api';
import useIsElementVisible from "../../hooks/useIsElementVisible";
/*Components*/
import { Input } from '../../components/Input';
import UserCard from '../../components/UserCard';
import { Loader } from '../../components/Loader';
import { NoData } from '../../components/NoData';
import LastElement from '../../components/LastElement';
/*Interfaces*/
import { IUserListed } from '../../interfaces/user';

export function Home() {

  const [userList, setUserList] = useState<IUserListed[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState("");

  const lastRef = useRef(null);
  const isLastVisible = useIsElementVisible(lastRef.current);

  const fetchData = useCallback(async (val: number, reset?: boolean) => {
    try {
      setIsLoading(true);
      let response = await api.get(`/users?since=${val}&per_page=10`);
      if (reset) {
        setUserList([...response.data]);
        setSearched("");
      } else {
        setUserList([...userList, ...response.data]);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Erro ao buscar users", error);
    }
  }, [userList, setUserList, setIsLoading, setSearched]);

  useEffect(() => {
    fetchData(0);
  }, []);

  useEffect(() => {
    if (isLastVisible && (userList.length > 0)) {
      fetchData(userList[userList.length - 1].id);
    }
  }, [isLastVisible]);

  const search = useCallback(async (e: any) => {
    e.preventDefault();
    if (!e.target.searchInput.value)
      return;
    try {
      setIsLoading(true);
      setSearched(e.target.searchInput.value);
      let response = await api.get(`/users/${e.target.searchInput.value}`);
      setUserList([response.data]);
      setIsLoading(false);
    } catch (error) {
      setUserList([]);
      setIsLoading(false);
      console.log("Erro ao buscar user", error);
    }
  }, [setSearched, setUserList, setIsLoading]);

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
        <SearchTag
          isVisible={!!searched && !isLoading}
          onClick={() => fetchData(0, true)}
        >
          {searched}
          <XIcon />
        </SearchTag>
        {
          !!userList.length ? (
            userList.map(user => (
              <UserCard
                key={user.html_url}
                user={user}
              />
            ))
          ) : (
            !isLoading && <NoData text='Busca sem resultados' />
          )
        }
        {isLoading && <Loader />}
        <LastElement
          isVisible={!!userList.length}
          ref={lastRef}
        />
      </Content>
    </Container>
  )
}