import {useEffect, useState} from 'react'
import conf from '../conf.js'
import axios from "../Api/axios.js"
import { useLocation } from 'react-router-dom'

function UseNewsData(props, currentPage) {
    const [newsData, setnewsData] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(null)
    const [totalArticles, settotalArticles] = useState(0)

    const {Category=[], Country="", SortBy=""} = props;

    const location = useLocation()
    let SearchTerm = ""
    if(location.search){
        SearchTerm = location.search.split("=")[1]
    }

    useEffect(() => {
        ;(async()=> {
            try {
                setloading(true)

                let {api_url, api_key} = conf
                let categoryParam = "";
                if(Category.length>0){
                    categoryParam = `categories=${Category[0]}`
                    for(let i=1; i<Category.length; i++){
                        categoryParam += `,${Category[i]}`
                    }
                }
                let searchParam = SearchTerm ? `&search=${SearchTerm}` : "";
                const countryParam = Country ? `&locale=${Country}` : "";
                const sortParam = SortBy ? `&sort=${SortBy}` : "";
                api_key = `&api_token=${api_key}`

                api_url = api_url + categoryParam + searchParam
                api_url = api_url + countryParam + sortParam + "&language=en" + api_key + '&limit=3' + `&page=${currentPage}`;
                console.log(api_url);
                const data = await axios.get(api_url)
                settotalArticles(prev => data.data.meta.found)
                setnewsData(prev => data.data.data)
                setloading(false)
            } catch (error) {
                seterror(error)
                setloading(false)
            }
            
        })()
    },[Category, SearchTerm, SortBy, Country, currentPage])

    return {newsData, loading , error, totalArticles}
}

export default UseNewsData