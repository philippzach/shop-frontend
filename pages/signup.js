import React, { Component } from 'react'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import Reset from '../components/RequestReset'
import styled from 'styled-components';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export default class signup extends Component {
    render() {
        return (
            <Columns>
                <Signup/>
                <Signin/>
                <Reset/>
            </Columns>
        )
    }
}
