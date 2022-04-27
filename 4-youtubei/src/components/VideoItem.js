import React from 'react'

const VideoItem = ({ video ,onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} >
        <div className="card"   >
            <img src={video.snippet.thumbnails.medium.url} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <p className="card-text"> {video.snippet.title}  </p>
            </div>
        </div>
        </div>
    )
}
export default VideoItem
