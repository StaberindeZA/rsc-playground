import { getCart } from '../utils';

export async function CartDetails() {
  const CART_ID = 1;
  const { id, apiId, createdAt } = await getCart(CART_ID);
  return (
    <ul>
      <li>ID: {id}</li>
      <li>Api ID: {apiId}</li>
      <li>Created At: {createdAt}</li>
    </ul>
  );
}

export default CartDetails;
