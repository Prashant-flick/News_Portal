import { useEffect, useState } from 'react'
import { Card, Col, Container, Row} from "react-bootstrap"
import conf from '../conf.js'
import {
	fetchNews
} from '../Api/FetchNews.js'

function NewsList(props) {
	const {Category, SearchTerm, TopHeadlines, Country, SortBy} = props

	const [news, setnews] = useState([])
	

	useEffect(()=>{
		;(async()=>{
			let url = `${conf.api_url}`
			if(TopHeadlines){
				url+="/top-headlines?"
			}else{
				url+="/everything?"
			}

			if(SearchTerm){
				url+=`q=${SearchTerm}`
			}

			if(Category){
				url+=`&category=${Category}`
			}

			if(Country){
				url+=`&country=${Country}`
			}

			if(SortBy){
				url+=`&sortBy=${SortBy}`
			}
			url+=`&apiKey=${conf.api_key}`

			const data = await fetchNews(url);
			console.log(data);
		})()
	})
    
	return (
		<div>NewsList</div>
	)
}

export default NewsList