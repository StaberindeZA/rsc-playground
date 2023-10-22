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
      <p>Counter: {counter}</p>
      <button onClick={() => incrementCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default IncrementState;
