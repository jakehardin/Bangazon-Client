import { clientCredentials } from '../client';

const getProducts = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${id}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getProducts, deleteProduct,
};
