import { getCart } from '../utils';
import styles from './cart.module.css';
import CounterOverall from './counter-overall';
import IncrementClient from './increment-client';
import IncrementServer from './increment-server';
import IncrementState from './increment-state';

/* eslint-disable-next-line */
export interface CartProps {}

export async function Cart(props: CartProps) {
  const CART_ID = 1;

  const { id, apiId, createdAt, counter } = await getCart(CART_ID);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Cart!</h1>
      <ul>
        <li>ID: {id}</li>
        <li>Api ID: {apiId}</li>
        <li>Created At: {createdAt}</li>
      </ul>
      <CounterOverall />
      <div className={styles['incrementContainer']}>
        <IncrementServer />
        <IncrementClient counter={counter} />
        <IncrementState />
      </div>
    </div>
  );
}

export default Cart;
