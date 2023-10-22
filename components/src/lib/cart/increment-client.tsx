'use client';
import { useState } from 'react';
import styles from './increment-client.module.css';

const CART_ID = 1;

/* eslint-disable-next-line */
export interface IncrementClientProps {
  counter: number;
}

export function IncrementClient(props: IncrementClientProps) {
  const [counter, setCounter] = useState(props.counter);

  const updateCartCounter = async (updateValue: number) => {
    const result = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation {
            updateCounter(id: ${CART_ID}, counterValue: ${updateValue}) {
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
    setCounter(result.data.updateCounter.counter);
  };

  return (
    <div className={styles['container']}>
      <h2>Cart Counter - CLIENT</h2>
      <p>Hit the button to increment the counter on the cart</p>
      <p>Counter: {counter}</p>
      <button onClick={() => updateCartCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default IncrementClient;
