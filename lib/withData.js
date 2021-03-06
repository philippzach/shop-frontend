import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
import { prodEndpoint } from '../config';
import { LOCAL_STATE_QUERY } from '../components/Cart';

function createClient({ headers }) {
  return new ApolloClient({
    uri: prodEndpoint,
    request: operation => {
      operation.setContext({
       /*  fetchOptions: {
          credentials: 'include',
        }, */
        headers,
      });
    },
    //local Data
    clientState: {
      resolvers:{
        Mutation: {
          toggleCart(_, variables, {cache}) {
            //read the cartOpen value from the cache
            const { cartOpen } = cache.readQuery({query: LOCAL_STATE_QUERY});
          //write the cart State to the opposite of inital value
            const data = {
              data: { cartOpen: !cartOpen}
            };
            cache.writeData(data);
            return data
        }
        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

export default withApollo(createClient);
