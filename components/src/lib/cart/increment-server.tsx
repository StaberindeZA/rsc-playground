import { revalidateTag } from 'next/cache';
import styles from './increment-server.module.css';
import { getCounter } from '../utils';

const CART_ID = 1;

/* eslint-disable-next-line */
export interface IncrementServerProps {}

const updateCartCounter = async () => {
  'use server';
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

  revalidateTag('counterOnly');
};

export async function IncrementServer(props: IncrementServerProps) {
  const counter = await getCounter(CART_ID);
  return (
    <div className={styles['container']}>
      <h2>Cart Counter - SERVER</h2>
      <p>Hit the button to increment the counter on the cart</p>
      <form action={updateCartCounter}>
        <p>Counter: {counter}</p>
        <button>Increment</button>
      </form>
    </div>
  );
}

export default IncrementServer;
