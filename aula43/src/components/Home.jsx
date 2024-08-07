import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled(NavLink)`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 1rem;
  background-color: #333;
  color: white;
  text-decoration: none;
`

export default function Home() {
  return (
    <Navbar>
      <Link to='ip'>IpAdress</Link>
      <Link to='language'>Translator</Link>
      <Link to='movie'>Movie</Link>
      <Link to='qrcode'>QRcode</Link>
    </Navbar>
  )
}
