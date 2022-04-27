import axios  from 'axios'
const KEY ="AIzaSyCCHLFpt_z0FeefYzsTppYBCtRKCc6dcuw"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});  
