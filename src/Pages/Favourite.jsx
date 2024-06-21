import {useState, useRef} from 'react'
import {
    Row,
    Col,
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Dropdown,
    Container
} from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import FavouriteNewsList from '../Component/FavouriteNewsList'

function Favourite() {
    const elementsRef = useRef(null);
    const searchRef = useRef(null);
    const navigate = useNavigate()
    const [searchTerm, setsearchTerm] = useState("")
    const [showhover,setshowhover] = useState(false)

    const handleSearchTerm = (e) => {
        e.preventDefault()
        setcategory([]);
        const elements = elementsRef.current.querySelectorAll('.checkBox');
        elements.forEach(element => {
            element.children[0].checked = false
        });
        setsearchTerm(prev => e.target.search.value)
    }

    return (
        <>
            <Navbar bg="light" expand="lg" className="mb-4">
                <Container>
                    <Navbar.Brand href="/" className="fw-bold fs-4">
                        NewsLetter
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />

                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">

                        </Nav>

                        <Form 
                            onSubmit={(e) => handleSearchTerm(e)}
                            className="d-flex"
                        >
                            <FormControl
                                ref={searchRef}
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                name="search"
                            />

                            <Button 
                                type="submit" 
                                variant="outline-primary" 
                                className="me-2"
                            >
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>

                    <button
                        onMouseEnter={() => setshowhover(true)}
                        onMouseLeave={() => setshowhover(false)}
                        onClick={(e) => {
                            e.preventDefault()
                            navigate('/favourite')
                        }}
                        className='border-1 border-black bg-red-500 w-10 h-10 rounded-full flex justify-center items-center'
                    >
                        <span class="material-symbols-outlined">
                            favorite
                        </span>
                        {
                            showhover &&
                            <h6 className='absolute top-14 bg-gray-400 px-2 py-1'>Fav Articles</h6>
                        }
                    </button>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col>
                        <FavouriteNewsList SearchTerm={searchTerm} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Favourite