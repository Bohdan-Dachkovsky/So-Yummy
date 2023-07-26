import axios from 'axios';

// import { baseUrl } from 'constants';
// axios.defaults.baseURL = baseUrl;

const getAllFavorites = async () => {
  const res = await axios.get('favorite/all');
  return res.data;
};

export default getAllFavorites;
