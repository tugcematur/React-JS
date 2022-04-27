import React from 'react'
import Search from './Search'
import unsplash from '../apis/unsplash'
import ImageList from '../components/ImageList'
//import axios from 'axios'

class App extends React.Component {
    state = {images: []};
    // onSearchSubmit = (text) => {
    //     console.log(text)
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query:text  },
    //         headers: {
    //             Authorization: 
    //             'Client-ID jjHS5oUsDvaCIBZ2QAnw_tHj1_tof4R0QAPg6ciTbxU',
    //         }
    //     }).then((response)=> {
    //         console.log(response.data.results)
    //         this.setState({images: response.data.results});
    //     })
    // }
   onSearchSubmit = async  (text)=>{
        console.log(text)
        const response = await unsplash.get('/search/photos', {
            params: {query:text  },
            
        });
        console.log(response.data.results)
        this.setState({images : response.data.results});
        
    }
    render() {
        return (
            <div className="container">
                <Search onSubmit={this.onSearchSubmit}></Search>
                <ImageList images= {this.state.images}></ImageList>
            </div>
        );
    }
}
export default App;
