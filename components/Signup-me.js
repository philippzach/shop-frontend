import React, { Component } from 'react'
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage'
import { CURRENT_USER_QUERY } from './User';

const SIGNUP_MUTATION = gql`
mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
}
`


export default class Signup extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        success: false
      };
      saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    render() {
        return (
            <Mutation 
            mutation={SIGNUP_MUTATION}
            variables={this.state}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
                {(signup, {error, loading})=> {
 
           return (
            <Form method='post' onSubmit={async e => {
            e.preventDefault();
            const res = await signup();
            if (res) {
                this.setState({success: true})
            };
            this.setState({name: '', email: '', password: ''})
            }
            }>
                <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Sign up for account</h2>
                    
                        {this.state.success && <h2>Thanks for signing up!</h2>}
              
                    <Error error={error}></Error>
                    <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Sign Up!</button>

                </fieldset>
            </Form>)
        }}
            </Mutation>
        )
    }
}
