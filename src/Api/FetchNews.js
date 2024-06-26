import axios from './axios'

const fetchNews = async(url) => {
    try {
        const data = await axios.get(`${url}`)
        // console.log(data)
        return data.data.articles
    } catch (error) {
        return error
    }
}

export {
    fetchNews
}