export async function getCounter(cartId: number) {
  const result = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        counter(cartId: ${cartId}) {
          counter
        }
      }`,
    }),
    next: { tags: ['counter'] },
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return result.data.counter.counter;
}

export async function getCart(cartId: number) {
  console.log('THIS IS CALLED');
  const result = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        cart(id: ${cartId}) {
          id
          apiId
          createdAt
        }
      }`,
    }),
    next: { tags: ['cart'] },
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return result.data.cart;
}
