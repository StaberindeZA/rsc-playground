import styles from './increment-server.module.css';

/* eslint-disable-next-line */
export interface IncrementServerProps {
  counter: number;
}

export function IncrementServer(props: IncrementServerProps) {
  return (
    <div className={styles['container']}>
      <h2>Cart Counter - SERVER</h2>
      <p>Hit the button to increment the counter on the cart</p>
      <p>Counter: {props.counter}</p>
      <button>Increment</button>
    </div>
  );
}

export default IncrementServer;
