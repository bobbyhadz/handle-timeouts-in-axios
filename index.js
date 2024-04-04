// EXAMPLE 1 - How to handle Timeouts when using Axios

import axios from 'axios';

// 👇️ if you use CommonJS require()
// const axios = require('axios');

async function getPosts() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        timeout: 3000,
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return response.data;
  } catch (err) {
    if (err.code === 'ECONNABORTED') {
      console.log('The request timed out.');
    } else {
      console.log(err);
    }
  }
}

getPosts().then(result => {
  console.log(result);
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Setting the `timeout` property for multiple requests

// import axios from 'axios';

// // 👇️ if you use CommonJS require
// // const axios = require('axios');

// export const placeholderApi = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
//   timeout: 3000,
// });

// async function getPosts() {
//   try {
//     const response = await placeholderApi.get('/posts', {
//       headers: {
//         Accept: 'application/json',
//       },
//     });

//     return response.data;
//   } catch (err) {
//     if (err.code === 'ECONNABORTED') {
//       console.log('The request timed out.');
//     } else {
//       console.log(err);
//     }
//   }
// }

// getPosts().then(result => {
//   console.log(result);
// });

// ------------------------------------------------------------------

// EXAMPLE 3 -
