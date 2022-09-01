import axios from "axios"
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

// options from RapidApi
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  // everytime we pass this function into another component we also pass the URL we are grabbing data from
export const fetchApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data

} 