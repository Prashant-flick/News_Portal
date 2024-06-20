import { useEffect, useState } from 'react'
import { Card, Col, Container, Row} from "react-bootstrap"
import conf from '../conf.js'
import {
	fetchNews
} from '../Api/FetchNews.js'

function NewsList(props) {
	const {Category=[], SearchTerm="", Country="", SortBy=""} = props
	// console.log(Category);
	// console.log(Country);
	// console.log(SortBy);
	// console.log(SearchTerm);

	const [news, setnews] = useState([])
	const dummynews =  [
		  {
			"title": "Apple's iPhone 14 Lineup Leaked in New Photos",
			"description": "Leaked images provide a clear look at Apple's upcoming iPhone 14 series, ahead of the expected launch next month.",
			"content": "Apple's next-generation iPhone 14 series is set to be unveiled next month, with a variety of new features and improvements. These leaked photos give us a sneak peek at what to expect... [1420 chars]",
			"url": "https://www.technews.com/articles/apple-iphone-14-lineup-leaked",
			"image": "https://www.technews.com/images/articles/iphone14-leak.jpg",
			"publishedAt": "2024-06-19T10:15:24Z",
			"source": {
			  "name": "TechNews",
			  "url": "https://www.technews.com"
			}
		  },
		  {
			"title": "Samsung Galaxy S23 Rumors: What We Know So Far",
			"description": "Details about the Samsung Galaxy S23 series have been slowly leaking out, giving us an idea of what to expect.",
			"content": "The Samsung Galaxy S23 is expected to launch early next year, and leaks suggest major upgrades in camera technology and battery life. Here's what we've learned so far... [1425 chars]",
			"url": "https://www.gadgetreview.com/news/samsung-galaxy-s23-rumors",
			"image": "https://www.gadgetreview.com/images/articles/galaxy-s23-rumors.jpg",
			"publishedAt": "2024-06-18T09:30:45Z",
			"source": {
			  "name": "GadgetReview",
			  "url": "https://www.gadgetreview.com"
			}
		  },
		  {
			"title": "Tesla Announces New Battery Technology",
			"description": "Tesla has unveiled its latest battery technology, promising longer range and faster charging times for its electric vehicles.",
			"content": "At the recent Tesla Battery Day event, CEO Elon Musk revealed a new battery design that aims to revolutionize the EV industry. The new technology promises to extend the range and improve the efficiency of Tesla cars... [1430 chars]",
			"url": "https://www.electricvehicleupdate.com/news/tesla-new-battery-tech",
			"image": "https://www.electricvehicleupdate.com/images/articles/tesla-battery-tech.jpg",
			"publishedAt": "2024-06-17T11:45:12Z",
			"source": {
			  "name": "Electric Vehicle Update",
			  "url": "https://www.electricvehicleupdate.com"
			}
		  },
		  {
			"title": "Microsoft Surface Pro 9 Expected to Launch This Fall",
			"description": "Rumors suggest that Microsoft is preparing to release the Surface Pro 9 with several new features and enhancements.",
			"content": "Microsoft's Surface Pro 9 is expected to hit the market this fall, featuring improved performance, a new design, and enhanced compatibility with Windows 11. Here's what we know so far... [1435 chars]",
			"url": "https://www.techinsider.com/news/microsoft-surface-pro-9",
			"image": "https://www.techinsider.com/images/articles/surface-pro-9.jpg",
			"publishedAt": "2024-06-16T13:20:34Z",
			"source": {
			  "name": "TechInsider",
			  "url": "https://www.techinsider.com"
			}
		  },
		  {
			"title": "Amazon's New Echo Devices: A Sneak Peek",
			"description": "Leaked images and details about Amazon's upcoming Echo devices hint at significant upgrades and new features.",
			"content": "Amazon is set to unveil its latest Echo devices next month, and leaked information suggests that we can expect major improvements in audio quality, smart home integration, and design... [1440 chars]",
			"url": "https://www.smarthomeworld.com/news/amazon-new-echo-devices",
			"image": "https://www.smarthomeworld.com/images/articles/echo-devices.jpg",
			"publishedAt": "2024-06-15T15:05:50Z",
			"source": {
			  "name": "SmartHomeWorld",
			  "url": "https://www.smarthomeworld.com"
			}
		  },
		  {
			"title": "Google Unveils New AI Features for Search",
			"description": "Google has announced new AI-powered features for its search engine, aimed at providing more relevant and personalized results.",
			"content": "At its annual developer conference, Google introduced several new AI features for its search engine, designed to enhance user experience by delivering more accurate and personalized search results... [1445 chars]",
			"url": "https://www.searchenginejournal.com/news/google-ai-search",
			"image": "https://www.searchenginejournal.com/images/articles/google-ai-search.jpg",
			"publishedAt": "2024-06-14T14:10:20Z",
			"source": {
			  "name": "Search Engine Journal",
			  "url": "https://www.searchenginejournal.com"
			}
		  },
		  {
			"title": "Facebook's Metaverse Plans: What We Know",
			"description": "Facebook has shared new details about its plans for the metaverse, including potential applications and partnerships.",
			"content": "During the latest Facebook Connect event, CEO Mark Zuckerberg outlined the company's ambitious plans for the metaverse, highlighting potential applications in gaming, socializing, and business... [1450 chars]",
			"url": "https://www.virtualrealitytoday.com/news/facebook-metaverse",
			"image": "https://www.virtualrealitytoday.com/images/articles/facebook-metaverse.jpg",
			"publishedAt": "2024-06-13T17:30:00Z",
			"source": {
			  "name": "Virtual Reality Today",
			  "url": "https://www.virtualrealitytoday.com"
			}
		  },
		  {
			"title": "Sony's PlayStation 5 Pro: Rumored Features",
			"description": "Speculation about the upcoming PlayStation 5 Pro suggests it will feature significant hardware upgrades and new capabilities.",
			"content": "The PlayStation 5 Pro is rumored to be in development, with leaks indicating that it will feature a more powerful GPU, increased storage, and enhanced VR capabilities... [1455 chars]",
			"url": "https://www.gamingnews.com/news/ps5-pro-rumors",
			"image": "https://www.gamingnews.com/images/articles/ps5-pro-rumors.jpg",
			"publishedAt": "2024-06-12T18:00:45Z",
			"source": {
			  "name": "Gaming News",
			  "url": "https://www.gamingnews.com"
			}
		  },
		  {
			"title": "NVIDIA GeForce RTX 4090: First Impressions",
			"description": "The first reviews of NVIDIA's GeForce RTX 4090 are in, and they suggest this could be the most powerful GPU yet.",
			"content": "Early reviews of the NVIDIA GeForce RTX 4090 indicate that this new GPU offers unparalleled performance for gaming and professional applications, making it a top choice for enthusiasts... [1460 chars]",
			"url": "https://www.hardwareinsider.com/news/nvidia-rtx-4090-reviews",
			"image": "https://www.hardwareinsider.com/images/articles/rtx-4090.jpg",
			"publishedAt": "2024-06-11T20:40:15Z",
			"source": {
			  "name": "Hardware Insider",
			  "url": "https://www.hardwareinsider.com"
			}
		  },
		  {
			"title": "Intel's 13th Gen Processors: What to Expect",
			"description": "Intel is gearing up to launch its 13th generation processors, promising significant performance boosts and new features.",
			"content": "The upcoming 13th gen Intel processors are expected to deliver substantial performance improvements and new features aimed at both gamers and professionals. Here's what we know so far... [1465 chars]",
			"url": "https://www.techupgrades.com/news/intel-13th-gen-processors",
			"image": "https://www.techupgrades.com/images/articles/intel-13th-gen.jpg",
			"publishedAt": "2024-06-10T19:55:30Z",
			"source": {
			  "name": "Tech Upgrades",
			  "url": "https://www.techupgrades.com"
			}
		  },
		  {
			"title": "Apple Watch Series 8: New Health Features",
			"description": "Apple's upcoming Watch Series 8 is rumored to include several new health monitoring features, including blood pressure tracking.",
			"content": "The Apple Watch Series 8 is expected to introduce new health monitoring capabilities, such as blood pressure tracking, improved sleep analysis, and more, making it a must-have for health-conscious users... [1470 chars]",
			"url": "https://www.smartwatchnews.com/news/apple-watch-series-8",
			"image": "https://www.smartwatchnews.com/images/articles/apple-watch-8.jpg",
			"publishedAt": "2024-06-09T21:10:05Z",
			"source": {
			  "name": "SmartWatch News",
			  "url": "https://www.smartwatchnews.com"
			}
		  },
	]

	useEffect(()=>{
		;(async()=>{
			let url = `${conf.api_url}`

			if(SearchTerm){
				url+="/search?"
				url+=`q=${SearchTerm}`
			}
			else if(Category.length>0){
				url+="/top-headlines?"
				url+=`categoty=${Category[0]}`
			}else{
				url+="/search?"
				url+="q=everything"
			}

			url+=`&lang=en`	

			if(Country){
				url+=`&country=${Country}`
			}

			if(SortBy){
				url+=`&sortby=${SortBy}`
			}
			url+=`&max=9`
			url+=`&apikey=${conf.api_key}`
			console.log(url);

			// const data = await fetchNews(url);
			// console.log(data);
			setnews(prev => dummynews)
		})()
	},[Category, SearchTerm, SortBy, Country])
    
	return (
		<Container>
			<Row>
				{news.map((article,index) => {
					return (
						<Col xs={12} md={6} lg={4} key={index}>
							<Card>
								<Card.Img src={article.image} variant="top" />
								<Card.Body>
									<Card.Title>{article.title}</Card.Title>
									<Card.Text>{article.description}</Card.Text>
									<Card.Link href={article.url}>read more</Card.Link>
								</Card.Body>
							</Card>
						</Col>
					)
				})}
			</Row>
		</Container>
	)
}

export default NewsList