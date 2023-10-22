import { revalidatePath, revalidateTag } from 'next/cache';
import styles from './increment-server.module.css';

const CART_ID = 1;

/* eslint-disable-next-line */
export interface IncrementServerProps {
  counter: number;
}

const updateCartCounter = async () => {
  'use server';
  console.log('REINO');
  const result = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation {
          incrementCounter(id: ${CART_ID}) {
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

  console.log(result);
  revalidateTag('cart');
};

export function IncrementServer(props: IncrementServerProps) {
  return (
    <div className={styles['container']}>
      <h2>Cart Counter - SERVER</h2>
      <p>Hit the button to increment the counter on the cart</p>
      <form action={updateCartCounter}>
        <p>Counter: {props.counter}</p>
        <button>Increment</button>
      </form>
    </div>
  );
}

export default IncrementServer;
