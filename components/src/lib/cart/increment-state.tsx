'use client';
import { useState } from 'react';
import styles from './increment-state.module.css';

/* eslint-disable-next-line */
export interface IncrementStateProps {}

export function IncrementState(props: IncrementStateProps) {
  const [counter, incrementCounter] = useState(0);
  return (
    <div className={styles['container']}>
      <h1>Increment State Counter</h1>
      <ul>
        <li>This is a client component</li>
        <li>
          It has state only local to the component, meaning on a page refresh,
          the state will be lost
        </li>
        <li>Notice how state is not lost when the counters are updated</li>
      </ul>
      <p>Counter: {counter}</p>
      <button onClick={() => incrementCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default IncrementState;
