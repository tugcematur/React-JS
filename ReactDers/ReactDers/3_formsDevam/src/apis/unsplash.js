import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID jjHS5oUsDvaCIBZ2QAnw_tHj1_tof4R0QAPg6ciTbxU',
    }
}) 