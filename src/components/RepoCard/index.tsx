import { memo } from 'react';
import {
  Container,
  RepositoryInfo,
  ArrowIcon
} from './styles';
import { IRepository } from '../../interfaces/repository';

interface RepoCardProps {
  repo: IRepository;
}

function RepoCard({ repo }: RepoCardProps) {

  return (
    <Container
      href={repo.html_url}
      target="__blank"
    >
      <RepositoryInfo>
        <p>{repo.name}</p>
        <span>{repo.description}</span>
      </RepositoryInfo>
      <ArrowIcon />
    </Container>
  )
}

export default memo(RepoCard);