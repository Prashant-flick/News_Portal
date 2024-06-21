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
import NewsList from '../Component/NewsList.jsx'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [category, setcategory] = useState([])
    const [sortBy, setsortBy] = useState("")
    const [country, setcountry] = useState("")
    const [searchTerm, setsearchTerm] = useState("")
    const [showhover, setshowhover] = useState(false)

    const countries = [
        "None",
        "US", // United States
        "CN", // China
        "IN", // India
        "JP", // Japan
        "DE", // Germany
        "GB", // United Kingdom
        "FR", // France
        "BR", // Brazil
        "RU", // Russia
        "ID", // Indonesia
        "MX", // Mexico
        "NG", // Nigeria
        "PK", // Pakistan
        "BD", // Bangladesh
        "KR", // South Korea
        "TR", // Turkey
        "IT", // Italy
        "ZA", // South Africa
        "AR", // Argentina
        "CA"
    ];

    const elementsRef = useRef(null);
    const searchRef = useRef(null);
    const navigate = useNavigate()

    const handleCategoryClick = (e) => {
        setsearchTerm(prev => "")
        searchRef.current.value = ""
        if(e.target.checked === true){
            setcategory((prev) => [...prev, e.target.name])
        }else{
            setcategory((prev) => prev.filter((elem) => elem!==e.target.name))
        }
    }

    const handleClearCategories = (e) => {
        e.preventDefault();
        setcategory([]);
        const elements = elementsRef.current.querySelectorAll('.checkBox');
        elements.forEach(element => {
            element.children[0].checked = false
        });
    };

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
                    <Col xs={12} md={2}>
                        <h5>Categories</h5>
                        <Nav className='flex-column mb-4'>
                            <Form ref={elementsRef}>
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => handleCategoryClick(e)}
                                    type='checkbox'
                                    id='default-checkbox-0'
                                    label='General'
                                    name='general'
                                    className='text-primary link-secondary checkBox'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => handleCategoryClick(e)}
                                    type='checkbox'
                                    id='default-checkbox-1'
                                    label='Food'
                                    name='food'
                                    className='text-primary link-secondary checkBox'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => handleCategoryClick(e)}
                                    type='checkbox'
                                    id='default-checkbox-2'
                                    label='Business'
                                    name='business'
                                    className='text-primary link-secondary checkBox'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => handleCategoryClick(e)}
                                    type='checkbox'
                                    id='default-checkbox-3'
                                    label='Technology'
                                    name='tech'
                                    className='text-primary link-secondary checkBox'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => handleCategoryClick(e)}
                                    type='checkbox'
                                    id='default-checkbox-4'
                                    label='Sports'
                                    name='sports'
                                    className='text-primary link-secondary checkBox'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => handleCategoryClick(e)}
                                    type='checkbox'
                                    id='default-checkbox-5'
                                    label='Entertainment'
                                    name='entertainment'
                                    className='text-primary link-secondary checkBox'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => handleCategoryClick(e)}
                                    type='checkbox'
                                    id='default-checkbox-6'   
                                    label='Politics'
                                    name='politics'
                                    className='text-primary link-secondary checkBox'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => handleCategoryClick(e)}
                                    type='checkbox'
                                    id='default-checkbox-7'   
                                    label='Science'
                                    name='science'
                                    className='text-primary link-secondary checkBox'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => handleCategoryClick(e)}
                                    type='checkbox'
                                    id='default-checkbox-8'   
                                    label='Health'
                                    name='health'
                                    className='text-primary link-secondary checkBox'
                                />
                                <Button
                                    onClick={(e) => handleClearCategories(e)}
                                    className='btn-danger btn-sm'
                                >
                                    Clear Categories
                                </Button>
                            </Form>
                        </Nav>

                        <Nav className='flex-column mb-3'>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    SortBy
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setsortBy(prev => "")
                                        }}
                                    >
                                        None
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setsortBy(prev => "published_at")
                                        }}
                                    >
                                        publishedAt
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setsortBy(prev => "relevance_score")
                                        }}
                                    >
                                        relevance
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>

                        <Nav className='flex-column'>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Country
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='overflow-x-hidden overflow-scroll h-[15rem]'>
                                    {
                                        countries.map((elem, index) => {
                                            return(
                                                <Dropdown.Item key={index}
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        if(elem === "None"){
                                                            setcountry("")
                                                        }else{
                                                            setcountry(prev => elem.toLowerCase())
                                                        }
                                                    }}
                                                >
                                                    {elem}
                                                </Dropdown.Item>
                                            )
                                        })
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        
                    </Col>

                    <Col xs={12} md={10}>
                        <NewsList Category={category} Country={country} SortBy={sortBy} SearchTerm={searchTerm}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home