import React, { Component,useState,useEffect } from 'react'
import Search from './components/Search'
import youtube from './Apis/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail' 

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null)
  useEffect(() =>{
     onFormSubmit('Atatürk');
  },[])
 const  onFormSubmit = async (text) => {
    const response = await youtube.get('/search', {
      params: {
        q: text
      }
    });
    setVideos ( response.data.items)
    setSelectedVideo  (response.data.items[0])
  };
 const  onVideoSelect = (video) => {
   setSelectedVideo(video)
  }
  return (
    <div >
      <Search onFormSubmit={onFormSubmit}></Search>
      <div className="row">
        <div className="col-md-5">
          <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
        <div className="col-md-7">
          <VideoDetail video={selectedVideo} />
        </div>
      </div>
    </div>
  )
}
 
export default App
