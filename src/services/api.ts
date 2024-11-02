import axios from 'axios';
import { Image } from '../types';

type FetchImagesResponse = {
  results: Image[];
  total: number;
  total_pages: number;
};

async function searchImages(
  query: string,
  page: number
): Promise<FetchImagesResponse> {
  axios.defaults.baseURL = 'https://api.unsplash.com';
  const KEY = '0ZudpUv7GxFuJyDzxcUvWj_lZ-W1qEART3qK0tEW_KU';

  const { data } = await axios.get<FetchImagesResponse>('/search/photos', {
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
