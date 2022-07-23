import {
  Container,
  UserImage,
  UserInfo,
  ArrowIcon
} from './styles';

interface UserCardProps {

}

export function UserCard({ }: UserCardProps) {

  return (
    <Container>
      <UserImage
        src={"https://imagens.brasil.elpais.com/resizer/AXY-znKLjN2eo__LAuOLMJSSPFA=/1960x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/6TE7TL7D4YWZFV2TFRSGNGN6JE.jpg"}
      />
      <UserInfo>
        <p>Tiago Neves Sanchez/repoTiago Neves Sanchez/repoTiago Neves Sanchez/repoTiago Neves Sanchez/repoTiago Neves Sanchez/repoTiago Neves Sanchez/repo</p>
        <span>Descrição do repo</span>
      </UserInfo>
      <ArrowIcon />
    </Container>
  )
}