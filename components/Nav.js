import Link from 'next/link';
import styled from "styled-components"
import {Mutation} from 'react-apollo'
import NavStyled from './styles/NavStyles';
import User from './User';
import Signout from '../components/Signout'
import CartCount from '../components/CartCount'
import {TOGGLE_CART_MUTATION} from '../components/Cart'


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
    <Mutation mutation={TOGGLE_CART_MUTATION}>
    {(toggleCart)=>(
      <button onClick={toggleCart}>My Cart<CartCount count={
        me.cart.reduce((tally, cartItem)=> tally + cartItem.quantity, 0)
        
        }/></button>
    )}
    </Mutation>
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
