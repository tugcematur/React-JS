import React from 'react'

export default function VideoList({ videos ,onVideoSelect}) {

    // if(props.videos.length===0){
    //     console.log("videos dizisi boş")
    // }
    // else{
    //     console.log(videos)
    // }                                            
                                    //   eğer key yazmazsam Warning! uyarısı veriyor consoleda
   
    console.log(videos)

    // const VideoSelect = (video) =>{
    //     onVideoSelect(video);
    // }

    const vlist = videos.map(video => (
        <div key= {video.id.videoId} >   
            <p >{video.snippet.title}</p>
                                                                  
            <img onClick={()=> onVideoSelect(video) } src={video.snippet.thumbnails.medium.url} alt=""  style={{cursor:"pointer"}}/>
            {/* Kendi içinde bulunduğu fonksiyonsa sadece {fonksiyonadı} , parametreye gerek yok */}
            {/* <img onClick={ VideoSelect} src={video.snippet.thumbnails.medium.url} alt=""  style={{cursor:"pointer"}}/>  */}
        </div>

    ))
    return (
        <div>{vlist}</div>
    )
}
