import { Link } from 'react-router'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import LightLogo from '../../assets/light-logo.png'
import DarkLogo from '../../assets/dark-logo.png'
import { useTheme } from '../../utils/hooks'

const urlRoot = "/shiny-agency";

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  const { theme } = useTheme()

  return (
    <NavContainer>
      <Link to={`${urlRoot}/`}>
        <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
      </Link>
      <div>
        <StyledLink $theme={theme} to={`${urlRoot}/`}>
          Accueil
        </StyledLink>
        <StyledLink $theme={theme} to={`${urlRoot}/freelances`}>
          Profils
        </StyledLink>
        <StyledLink to={`${urlRoot}/survey/1`} $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header