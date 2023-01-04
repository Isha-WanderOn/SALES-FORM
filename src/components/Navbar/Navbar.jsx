import logo from '../../assets/images/logo.png'
import Image from 'next/image'
import { MainDiv, Logo } from './Navbar.style'
const Navbar = () => {
  return (
    <MainDiv>
        <Logo>
            <Image src={logo} alt='logo' fill />
        </Logo>
    </MainDiv>
  )
}

export default Navbar