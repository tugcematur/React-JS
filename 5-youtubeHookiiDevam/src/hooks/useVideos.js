import { useState, useEffect } from 'react';
import youtube from '../Apis/youtube';

const useVideos = (defaultText) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultText);
    }, [])
    const  search = async (text) => {
        const response = await youtube.get('/search', {
          params: {
            q: text
          }
        });
        setVideos ( response.data.items)
      };
      return [videos , search]
     // or   return {videos , onFormSubmit}
};
export default useVideos;