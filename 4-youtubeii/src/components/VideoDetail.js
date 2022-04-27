import React from 'react'

const  VideoDetail = ({video})=> {
   
    if (!video) {
        return <div>Loading ....</div>
    }
    const source = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="position-fixed">
        <h3> {video.snippet.title}</h3>
         <div  >
            <iframe src= {source}  height="400" width="400"/>
         </div>
       <p>{video.snippet.description} </p>
    </div>
    )
}
export default VideoDetail