'use client';
import { useState } from 'react';
import styles from './increment-client.module.css';
import { useRouter } from 'next/navigation';

const CART_ID = 1;

/* eslint-disable-next-line */
export interface IncrementClientProps {
  counter: number;
}

export function IncrementClient(props: IncrementClientProps) {
  const router = useRouter();

  const updateCartCounter = async (updateValue: number) => {
    await fetch('http://localhost:3000/graphql', {
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
    router.refresh();
  };

  return (
    <div className={styles['container']}>
      <h2>Cart Counter - Client component</h2>
      <p>Hit the button to increment the counter on the cart</p>
      <ul>
        <li>Notice </li>
      </ul>
      <p>Counter: {props.counter}</p>
      <button onClick={() => updateCartCounter(props.counter + 1)}>
        Increment
      </button>
    </div>
  );
}

export default IncrementClient;
