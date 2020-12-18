import React, {Component} from 'react';
import Router from 'next/router'
import NProgress from 'nprogress'

class checkForSuccess extends React.Component {

    async componentDidMount() {
        NProgress.start();
        if (typeof window !== 'undefined') {
          const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
          console.log("Creating Order")

    const order = await this.props.createOrder({
            variables: {
              token: this.props.me
            }
          }).catch(err => {alert(err.message)}) ;
          console.log(order)
          Router.push({
              pathname: '/order',
              query: {id: order.data.createOrder.id}
          })
          NProgress.done();
        }
        if (query.get("canceled")) {
          console.log("Order not created")
        }
      }
    }
    
render() {
    return <>{this.props.children}</>
}
        
}


export default checkForSuccess 