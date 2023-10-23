export async function getCounter(cartId: number) {
  const result = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        cart(id: ${cartId}) {
          counter
        }
      }`,
    }),
    cache: 'no-cache',
    next: { tags: ['counter'] },
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return result.data.cart.counter;
}

export async function getCart(cartId: number) {
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
          counter
        }
      }`,
    }),
    cache: 'no-cache',
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return result.data.cart;
}
