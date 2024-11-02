import axios from 'axios';

async function searchImages(query, page) {
  axios.defaults.baseURL = 'https://api.unsplash.com';
  const KEY = '0ZudpUv7GxFuJyDzxcUvWj_lZ-W1qEART3qK0tEW_KU';

  const { data } = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
      client_id: KEY,
    },
  });

  return data;
}

export default searchImages;
