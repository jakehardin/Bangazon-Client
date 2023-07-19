import { clientCredentials } from '../client';

const getOrders = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders`, {
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

// const getMyStories = (uid) => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/stories.json?orderBy="uid"&equalTo="${uid}"`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data) {
//         resolve(Object.values(data));
//       } else {
//         resolve([]);
//       }
//     })
//     .catch(reject);
// });

// const getSingleProduct = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/products/${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// const createProduct = (product) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/products`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(product),
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// const updateProduct = (product) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/products/${product.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(product),
//   })
//     .then((data) => resolve(data))
//     .catch(reject);
// });

const deleteOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/orders/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getOrders, deleteOrder,
};
