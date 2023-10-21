import styles from './cart.module.css';

/* eslint-disable-next-line */
export interface CartProps {}

export function Cart(props: CartProps) {
  const id = 1;
  const apiID = 'vpn';
  const createdAt = 123;
  return (
    <div className={styles['container']}>
      <h1>Welcome to Cart!</h1>
      <ul>
        <li>ID: {id}</li>
        <li>Api ID: {apiID}</li>
        <li>Created At: {createdAt}</li>
      </ul>
    </div>
  );
}

export default Cart;
