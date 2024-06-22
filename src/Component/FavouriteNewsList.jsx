import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomPagination from './CustomPagination';
import {
	Container,
	Row,
	Col,
	Card
} from 'react-bootstrap'
import AddToFavourite from './AddToFavourite';
import { addArticle } from '../Store/CurrentArticleSlice';
import { useNavigate } from 'react-router-dom';

function FavouriteNewsList() {
    const favNews = useSelector((state) => state.favouriteReducer.ArticleData)
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

	const totalPages = Math.ceil(favNews.length/3)

	if(totalPages === 0){
		return (
			<div className="flex justify-center items-center text-lg">
				There are no Favourite Articles
			</div>
		)
	}

	const startIndex = (currentPage-1)*3;

	let newsData = [];
	for(let i=startIndex; i<startIndex+3 && i<favNews.length; i++){
		newsData.push(favNews[i])
	}
	    
	return (
		<Container>
			<Row>
				{newsData?.map((article,index) => {
					article = article?.article
					return (
						<Col xs={12} md={6} lg={4} className='pt-4' key={index}>
							<Card style={{ maxHeight: '80vh', overflowY: 'auto', alignItems: 'center' }} className="mb-3">
								<Card.Img src={article?.image_url} variant="top" />
								<AddToFavourite article={article}/>
								<Card.Body>
									<Card.Title>{article?.title}</Card.Title>
									<Card.Text>{article?.description}</Card.Text>
									<Card.Text>{article?.snippet}</Card.Text>
									<Card.Link
										className='cursor-pointer'
										onClick={(e) => handleReadMore(e, article)}
									>read more...</Card.Link>
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

export default FavouriteNewsList