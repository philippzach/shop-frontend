import React, { Component, useEffect } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import {Mutation} from 'react-apollo'
import NProgress from 'nprogress'
//import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import calcTotalPrice from '../lib/calcTotalPrice'
import Error from './ErrorMessage'
import User, {CURRENT_USER_QUERY} from './User'
import SickButton from './styles/SickButton';
import {endpoint} from '../config'
import CheckForSuccess from './CheckForSuccess'

const stripePromise = loadStripe("pk_test_51HzO9zBYO6Ud2vfb8AEngeJ3AcUt0eVhHpVbPcjTClDYj4YliXw7SEvWtSJjKHY7uee5gRAxd8VRJ5KrqwvFnN0W00htZXs6eh");

const CREATE_ORDER_MUTATION = gql`
 mutation createOrder($token: String!) {
   createOrder(token: $token) {
     id 
     charge
     total
     items {
       id
       title
     }
   }
 }
`

async function postData(url, data) {
          const stripe = await stripePromise;
          const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          const session = await response.json();
          // When the customer clicks on the button, redirect them to Checkout.
          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          },
          NProgress.done()
          );
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          }
        }


export default class TakeMyMoney extends Component {

handleClick = async (me) => {
    NProgress.start();
     const cart = me.me.cart;
      const lineItems = [];
        cart.forEach(function(item) {
          lineItems.push(
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: item.item.title,
                images: [item.item.image],
              },
              unit_amount: item.item.price,
            },
            quantity: item.quantity,
          }
        )});
      
      postData(`${endpoint}/create-checkout-session`, lineItems)
        .then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
  
    };

    render() {
        return (
            <User>
            {({data: me}) => (
              <Mutation mutation={CREATE_ORDER_MUTATION} refetchQueries={[{query: CURRENT_USER_QUERY}]}>
                {(createOrder) => 
                <CheckForSuccess createOrder={createOrder} me={me.me.id}>
                 <SickButton id="checkout-button" role="link" onClick={() => this.handleClick(me)}>Checkout</SickButton>
                </CheckForSuccess>
                      }
              </Mutation>
            )}
            </User>
        )
    }
}


