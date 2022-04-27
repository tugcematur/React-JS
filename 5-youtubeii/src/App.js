import React, { Component } from 'react'
import Search from './components/Search'
import youtube from './Apis/youtube'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'


class App extends Component {
  state = { videos: [], selectedVideo: null }
  onFormSubmit = async (text) => {
    const response = await youtube.get('/search', {
      params: {
        q: text
      }
    });
    this.setState({ videos: response.data.items })
    this.setState({ selectedVideo: response.data.items[0] })
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })

  }
  render() {
    return (
      <div >
        <Search onFormSubmit={this.onFormSubmit}></Search>
        <div className="row">
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
          </div>
          <div className="col-md-7">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
        </div>
      </div>
    )
  }
}
export default App
