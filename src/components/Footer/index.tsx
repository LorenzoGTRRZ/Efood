import { Link } from 'react-router-dom'
import face from '../../assets/icons/facebook.png'
import insta from '../../assets/icons/instagram.png'
import LogoImgHome from '../../assets/icons/logo.png'
import twitter from '../../assets/icons/twitter.png'
import { Footers, RedeSociais, SectionFooter, Titulo } from './styles'

const Footer = () => (
  <Footers className="container">
    <SectionFooter>
      <Link to="/">
        <img className="imagemLogo" src={LogoImgHome} alt="efood" />
      </Link>
      <RedeSociais>
        <a href="https://www.instagram.com">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com">
          <img src={face} alt="Facebook" />
        </a>
        <a href="https://www.twitter.com">
          <img src={twitter} alt="Twitter" />
        </a>
      </RedeSociais>
    </SectionFooter>
    <Titulo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Titulo>
  </Footers>
)

export default Footer
