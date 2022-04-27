import React, { Component, useEffect, useState } from "react";
import Search from "./components/Search";
import youtube from "./api/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";



// function onFormSubmit(text){
// console.log(text);
// }               


/*Kurduğumuz  Paketler 
  yarn add axios
  npm install url   */


function App() {
  const [videos, setVideos] = useState([]) // ilk etapta boş
  const [selectedVideo, setSelectedVideo] = useState(null)

  const onFormSubmit = async (text) => {
    const response =
      await
        youtube.get('/search', {
          params: {
            q: text
          }
        });
    console.log(response)

    console.log(selectedVideo)

  
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])

  };


  const onVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <div >
      <Search onFormSubmit={onFormSubmit} />
      <div className="row">
        <div className="col-md-5" >
          <VideoList videos={videos} onVideoSelect={onVideoSelect}/>
        </div>
        <div className="col-md-7" >
          <VideoDetail video={selectedVideo} />
        </div>

      </div>

    </div>
  );
}

export default App;


//https://developers.google.com/youtube/v3/live/docs
//https://blog.hubspot.com/website/how-to-get-youtube-api-key
//https://io.google/2022/
//https://support.google.com/googleapi/answer/6251787?hl=en#zippy=%2Ccreate-a-project

//https://console.cloud.google.com/projectselector2/apis/dashboard?pli=1&supportedpurview=project