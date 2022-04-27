import axios  from 'axios'

const KEY ="AIzaSyD7rQzTzS4BlsOqKtzuOJW2GlY6N_EUvQY"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 20,                                         //Aramada çıkacak video sayısı.
      key: KEY
  }
});

