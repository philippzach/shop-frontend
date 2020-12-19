import ItemComponent from '../components/Item'
import {shallow} from 'enzyme'
import Item from '../components/styles/ItemStyles';
import toJSON from 'enzyme-to-json';


const fakeItem = {
    id: 'ABC123',
    title: "A Cool Item",
    price: 5000,
    description: 'this item is really cool',
    image: 'god.jpg',
    largeImage: 'largegod.jpg',
};

describe('<Item />', () => {
    it('renders and matches the snapshot', ()=>{
        const wrapper = shallow(<ItemComponent item={fakeItem} />)
        expect(toJSON(wrapper)).toMatchSnapshot()
        /*   const price = '€50';
        expect(price).toMatchSnapshot(); */
    })

  /*   it('renders image properly', ()=>{
        const wrapper = shallow(<ItemComponent item={fakeItem}/>)
        const img = wrapper.find('img')
        expect(img.props().src).toBe(fakeItem.image)
        expect(img.props().alt).toBe(fakeItem.title) 
    })

    it('renders title and price', ()=>{
        const wrapper = shallow(<ItemComponent item={fakeItem}/>)
       const PriceTag = wrapper.find('PriceTag')
       console.log(PriceTag.children().text())
       expect(PriceTag.children().text()).toBe('€50')
       //console.log(PriceTag.dive().text())
        //console.log(wrapper.debug())
        expect(wrapper.find('Title a').text()).toBe(fakeItem.title)
    })
    it('renders button properly', ()=>{
        const wrapper = shallow(<ItemComponent item={fakeItem}/>)
        //console.log(wrapper.debug())
        const buttonList = wrapper.find('.buttonList')
        expect(buttonList.children()).toHaveLength(3)
        expect(buttonList.find('Link')).toHaveLength(1)
        expect(buttonList.find('Link').exists()).toBeTruthy()
        expect(buttonList.find('Link')).toBeTruthy()
        expect(buttonList.find('DeleteItem')).toBeTruthy()
        expect(buttonList.find('AddToCart')).toBeTruthy()
    }) */
});