import CartDetails from './CartDetails';
import styles from './cart.module.css';
import CounterOverall from './counter-overall';
import IncrementClient from './increment-client';
import IncrementServer from './increment-server';
import IncrementState from './increment-state';

/* eslint-disable-next-line */
export interface CartProps {}

export async function Cart(props: CartProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cart!</h1>
      <div>
        <CartDetails />
      </div>
      <div>
        <CounterOverall />
      </div>
      <div className={styles['incrementContainer']}>
        <IncrementServer />
        <IncrementClient />
        <IncrementState />
      </div>
    </div>
  );
}

export default Cart;
