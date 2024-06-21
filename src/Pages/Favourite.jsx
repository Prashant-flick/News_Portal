import {useState, useRef} from 'react'
import {
    Row,
    Col,
    Container
} from "react-bootstrap"
import FavouriteNewsList from '../Component/FavouriteNewsList'

function Favourite() {
    return (
        <Container>
            <Row>
                <Col>
                    <FavouriteNewsList />
                </Col>
            </Row>
        </Container>
    )
}

export default Favourite