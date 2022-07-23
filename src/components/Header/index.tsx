import {
  Container,
  StyledLogo,
  LogoContent,
  BackButton,
  ArrowIcon
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <Container>
      <LogoContent>
        <StyledLogo />
        <p>github_</p>
        <p className='font-light'>explorer</p>
        {
          pathname !== "/" && (
            <BackButton
              onClick={handleBack}
            >
              <ArrowIcon/>
              Voltar
            </BackButton>
          )
        }
      </LogoContent>
    </Container>
  )
}