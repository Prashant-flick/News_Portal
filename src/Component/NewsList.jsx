import { Card, Col, Container, Row} from "react-bootstrap"
import UseNewsData from '../hooks/UseNewsData'
import CustomPagination from "./CustomPagination";
import { useState } from "react";
import AddToFavourite from "./AddToFavourite.jsx";
import { addArticle } from "../Store/CurrentArticleSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function NewsList(props) {
	const [currentPage, setCurrentPage] = useState(1);
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const handlePagination = (i) => {
		setCurrentPage(i);
	}


	const handleReadMore = (e, article) => {
		e.preventDefault()
		dispatch(addArticle(article))
		navigate(`/article/${article?.uuid}`)
	}

	const {newsData, loading , error, totalArticles} = UseNewsData(props, currentPage);

	const totalPages = Math.ceil(totalArticles/3)

	if(error){
		return <div className="flex justify-center items-center text-red-800 text-lg">Error: {error.message}</div>
	}
    
	return (
		<Container>
			<Row>
				{loading ? <div className="flex h-[80vh] justify-center items-center text-lg">Loading...</div> : newsData?.map((article,index) => {
					return (
						<Col xs={12} md={6} lg={4} key={index}>
							<Card 
								style={{ maxHeight: '80vh', height: '80vh', overflowY: 'auto', alignItems: 'center' }} 
								className="mb-3"
							>
								<Card.Img src={article?.image_url} variant="top" className="" style={{height : '30vh' , objecFit: 'cover'}}/>
								<AddToFavourite article={article}/>
								<Card.Body>
									<Card.Title>{article?.title}</Card.Title>
									<Card.Text>{article?.description}</Card.Text>
									<Card.Text>{article?.snippet}</Card.Text>
									<Card.Link
										className="cursor-pointer"
										onClick={(e) => handleReadMore(e, article)}
									>read more</Card.Link>
								</Card.Body>
							</Card>
						</Col>
					)
				})}
			</Row>

			<CustomPagination currentPage={currentPage} totalPages={totalPages} handlePagination={handlePagination}/>
		</Container>
	)
}

export default NewsList