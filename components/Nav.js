import Link from 'next/link';
import NavStyled from './styles/NavStyles';
import User from './User';
import Signout from '../components/Signout'

const Nav = () => (
  <User>
  {/*  {({data: {me}})=> {
      console.log(me); 
    if (me) return <p>{me.name}</p>
    return null
    }
    } */}
  {({data: {me}})=> (
  <NavStyled>
    <Link href="/items">
      <a>Shop</a>
    </Link>
    {me && (
      <>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Account</a>
    </Link>
    <Signout />
    </>
    )}
    {!me && (
      <Link href="/signup">
      <a>Sign In</a>
    </Link>
    )}
   

  </NavStyled>

  )
    }
  </User>

);

export default Nav;
