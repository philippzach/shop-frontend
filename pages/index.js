import Items from '../components/Items';

const Home = props => (
  <div>
    <p>Welcome to Home Page!</p>
    <Items page={parseFloat(props.query.page) || 1}/>
  </div>
);

export default Home;
