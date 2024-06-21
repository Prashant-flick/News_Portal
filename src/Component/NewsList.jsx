import { Card, Col, Container, Row} from "react-bootstrap"
import UseNewsData from '../hooks/UseNewsData'
import CustomPagination from "./CustomPagination";
import { useEffect, useState } from "react";
import AddToFavourite from "./AddToFavourite.jsx";

function NewsList(props) {
	const [currentPage, setCurrentPage] = useState(1);
	
	const handlePagination = (i) => {
		setCurrentPage(i);
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
							<Card style={{ maxHeight: '80vh', overflowY: 'auto', alignItems: 'center' }} className="mb-3">
								<Card.Img src={article?.image_url} variant="top" />
								<AddToFavourite article={article}/>
								<Card.Body>
									<Card.Title>{article?.title}</Card.Title>
									<Card.Text>{article?.description}</Card.Text>
									<Card.Text>{article?.snippet}</Card.Text>
									<Card.Link href={article?.url}>read more</Card.Link>
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