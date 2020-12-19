import { mount }from 'enzyme'
import wait from 'waait'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from 'react-apollo/test-utils'
import RequestReset, {REQUEST_RESET_MUTATION} from '../components/RequestReset'

const mocks = [
    {
        request: {
            query: REQUEST_RESET_MUTATION,
            variables: { email: 'filippzach@gmail.com' },
        },
        result: {
            data: {
                requestReset: {
                    message: 'success',
                    __typename: 'message'
                }
            }
        }
    }
]

describe('<RequestReset />', () => {
    it('renders and matches Snapshot', async () =>{
        const wrapper = mount(
            <MockedProvider>
                <RequestReset />
            </MockedProvider>
        )
    const form = wrapper.find('form[data-test="form"]')
    expect(toJSON(form)).toMatchSnapshot()
     });
     /* it('calls mutation', async () =>{
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <RequestReset />
            </MockedProvider>
        )
            //simulation typing an emial
            wrapper
            .find('input')
            .simulate('change', {target: {name: 'email', value: 'filippzach@gmail.com'}})
            //submit the form
            wrapper
            .find('form[data-test="form"]')
            .simulate('submit')
            await wait();
            wrapper.update();
            expect(wrapper.find('p').text()).toContain('asdfas')
     }); */
});