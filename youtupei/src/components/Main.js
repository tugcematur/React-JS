import React, { Component } from 'react'
import Search from './Search'
import youtube from '../Apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

export default class main extends Component {
    state = { videos: [], selectedVideo: null }
    onTextsubmit = async (text) => {
        const response = await youtube.get('/search', {
            params: {
                q: text
            }
        });
        this.setState({ videos: response.data.items })
        this.setState({ selectedVideo: response.data.items[0]})
    };
    onVideoSelect = (video) => {
        console.log(video)
        this.setState({ selectedVideo: video })
        console.log(this.state.selectedVideo)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Search onFormSubmitx={this.onTextsubmit}></Search>
                    <div className="col-md-7" >
                        <VideoList onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos}>
                        </VideoList>
                    </div>
                    <div className="col-md-5">
                        <VideoDetail video={this.state.selectedVideo} >Loading....</VideoDetail>
                    </div>
                </div>
            </div>
        )
    }
}
