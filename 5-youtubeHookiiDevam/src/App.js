import React, { Component,useState,useEffect } from 'react'
import Search from './components/Search'
 
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import useVideos from './hooks/useVideos'

const App = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos,search] = useVideos('Atatürk')
  useEffect(() => {
    setSelectedVideo  (videos[0])
  },[videos])
 // setSelectedVideo  (response.data.items[0])

//  const  onVideoSelect = (video) => {
//    setSelectedVideo(video)
//   }
  return (
    <div >
      <Search onFormSubmit={search}></Search>
      <div className="row">
        <div className="col-md-5">
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
        <div className="col-md-7">
          <VideoDetail video={selectedVideo} />
        </div>
      </div>
    </div>
  )
}
 
export default App
