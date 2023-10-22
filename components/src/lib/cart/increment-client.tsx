'use client';
import styles from './increment-client.module.css';

/* eslint-disable-next-line */
export interface IncrementClientProps {
  counter: number;
}

export function IncrementClient(props: IncrementClientProps) {
  return (
    <div className={styles['container']}>
      <h2>Cart Counter - CLIENT</h2>
      <p>Hit the button to increment the counter on the cart</p>
      <p>Counter: {props.counter}</p>
      <button>Increment</button>
    </div>
  );
}

export default IncrementClient;
