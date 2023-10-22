import styles from './cart.module.css';
import CounterOverall from './counter-overall';
import IncrementClient from './increment-client';
import IncrementServer from './increment-server';
import IncrementState from './increment-state';

/* eslint-disable-next-line */
export interface CartProps {}

export async function Cart(props: CartProps) {
  const CART_ID = 1;

  const result = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        cart(id: ${CART_ID}) {
          id
          apiId
          createdAt
          counter
        }
      }`,
    }),
    cache: 'no-cache',
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));

  const { id, apiId, createdAt, counter } = result.data.cart;

  return (
    <div className={styles['container']}>
      <h1>Welcome to Cart!</h1>
      <ul>
        <li>ID: {id}</li>
        <li>Api ID: {apiId}</li>
        <li>Created At: {createdAt}</li>
      </ul>
      <CounterOverall />
      <div>
        <IncrementServer />
        <IncrementClient counter={counter} />
        <IncrementState />
      </div>
      <p>This is totally static data. This doesn't change at all</p>
    </div>
  );
}

export default Cart;
