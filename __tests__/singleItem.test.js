import { mount }from 'enzyme'
import toJSON from 'enzyme-to-json'
import wait from 'waait'
import SingleItem, {SINGLE_ITEM_QUERY} from '../components/SingleItem'
import { MockedProvider } from 'react-apollo/test-utils'
import { fakeItem } from '../lib/testUtils'

describe('<SingleItem/>', () => {
    it('renders with proper data', async () => {
       //pair of request and results, when somebody fires a query then return fake data
        //then pass them to Mocks Provider 
       const mocks = [
            {
                //when someone makes a reuqest with this query and variable combo
                request: {query: SINGLE_ITEM_QUERY, variables: { id: 'abc123'} },
               
                //return this fake data (mocked data)
                result: {
                    data: {
                    item: fakeItem(),
                    },
                },
            },
        ];
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <SingleItem id='abc123' />
            </MockedProvider>
        );
        //console.log(wrapper.debug())
        expect(wrapper.text()).toContain('Loading...');
        await wait();
        wrapper.update();
        //console.log(wrapper.debug());
        expect(toJSON(wrapper.find('h2'))).toMatchSnapshot()
        expect(toJSON(wrapper.find('img'))).toMatchSnapshot()
        expect(toJSON(wrapper.find('p'))).toMatchSnapshot()
    });

    it('errosr with non found item ', async() => {
        const mocks = [
            {
                //when someone makes a reuqest with this query and variable combo
                request: {query: SINGLE_ITEM_QUERY, variables: { id: 'abc123'} },
               
                //return this fake data (mocked data)
                result: {
                    errors: [{message: 'Item not Found'}],
                },
            },
        ];
        const wrapper = mount(
            <MockedProvider mocks={mocks}>
                <SingleItem id='abc123' />
            </MockedProvider>
        );
        await wait()
        wrapper.update()
        const item = wrapper.find('[data-test="graphql-error"]');
        //console.log(item.debug())
        expect(toJSON(item)).toMatchSnapshot()
    })
});