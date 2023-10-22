import { getCounter } from '../utils';
import styles from './counter-overall.module.css';

const CART_ID = 1;

/* eslint-disable-next-line */
export interface CounterOverallProps {}

export async function CounterOverall(props: CounterOverallProps) {
  const counter = await getCounter(CART_ID);
  return <p className={styles['overallCounter']}>Counter: {counter}</p>;
}

export default CounterOverall;
