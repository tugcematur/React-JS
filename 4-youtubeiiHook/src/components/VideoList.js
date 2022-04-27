import React from 'react'

const VideoList= ({videos,onVideoSelect})=> {
    const vlist = videos.map(video =>{
        return (
            <div  key = {video.id.videoId}   >
                <p>{video.snippet.title}</p>
                <img onClick={() => onVideoSelect(video)  } src = {video.snippet.thumbnails.medium.url}
                alt= "" style={{cursor: "pointer"}} />
            </div>
        ) 
    } )
    return (
        <div>
         {vlist}
        </div>
    )
}
 
export default VideoList
