import { mount }from 'enzyme'
import wait from 'waait'
import PleaseSignIn from '../components/PleaseSignIn'
import {CURRENT_USER_QUERY} from '../components/User'
import { MockedProvider } from 'react-apollo/test-utils'
import { fakeUser } from '../lib/testUtils'

const notSignedMocks = [
    {
        request: {query: CURRENT_USER_QUERY},
        result: {data: {me: null}},

    }
]
const signedInMocks = [
    {
        request: {query: CURRENT_USER_QUERY},
        result: {data: {me: fakeUser()}},

    }
]



describe('Please Sign in', () => {
    it('renders the sign in dialog to logged out user', async () => {
    
        const wrapper = mount(
            <MockedProvider mocks={notSignedMocks}>
                <PleaseSignIn>
                  
                </PleaseSignIn>
            </MockedProvider>
        );
        await wait();
        wrapper.update()
        //console.log(wrapper.debug())
        expect(wrapper.text()).toContain('Login to your account')
        expect(wrapper.find('Signin').exists()).toBeTruthy()
    });
    it('renders the child comp when the user is signed in', async () => {
        const Hey = () => <p>Hey</p>
        const wrapper = mount(
            <MockedProvider mocks={signedInMocks}>
                <PleaseSignIn>
                    <Hey/>
                </PleaseSignIn>
            </MockedProvider>
        );
        await wait();
        wrapper.update()
       // console.log(wrapper.debug())
       expect(wrapper.find('Hey').exists()).toBeTruthy()
       expect(wrapper.contains(<Hey />)).toBe(true)
    });
});