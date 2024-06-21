import {useState, useRef, useEffect} from 'react'
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
import useSize from '../hooks/useSize.jsx'

function Home() {
    const [category, setcategory] = useState([])
    const [sortBy, setsortBy] = useState("")
    const [country, setcountry] = useState("")
    const [showhover, setshowhover] = useState(false)
    const [colorMode, setcolorMode] = useState("Dark Mode")
    
    const winSize = useSize()

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

    const handlecolorMode = (e) => {
        let element = document.body;
        element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
        setcolorMode((elem) => elem=="Dark Mode" ? "Light Mode" : "Dark Mode")
    }

    const handleCategoryClick = (e) => {
        console.log(e.target.name);
        searchRef.current.value = ""
        if(e.target.checked === true){
            setcategory((prev) => [...prev, e.target.name])
        }else{
            setcategory((prev) => prev.filter((elem) => elem!==e.target.name))
        }
        navigate('/')
    }

    const handleClearCategories = (e) => {
        e.preventDefault();
        setcategory([]);
        const elements = elementsRef.current.querySelectorAll('.checkBox');
        elements.forEach(element => {
            element.children[0].checked = false
        });
        navigate('/')
    };

    const handleSearchTerm = (e) => {
        e.preventDefault()
        navigate(`/?q=${e.target.search.value}`)
    }

    return (
        <>
            <Navbar expand="lg" className={`${winSize[1]>=996 ? 'mb-5' : 'mb-3'}`}>
                <Container>
                    <Navbar.Brand href="/" className="fw-bold fs-4">
                        NewsLetter
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar-nav" />

                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="me-auto">

                        </Nav>

                        <Form
                            className='mr-4'
                        >
                            <Form.Check 
                                onClick={(e) => handlecolorMode(e)}
                                type='switch'
                                id='custom-switch'
                                label={colorMode}
                            />
                        </Form>

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
                        className='border-1 border-black bg-red-500 w-8 h-8 rounded-full flex justify-center items-center'
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
                {
                    winSize[1]<996 &&
                    <Row>
                        <Col xs={4} className='flex justify-center mb-3'>
                            <Dropdown>
                                <Dropdown.Toggle>
                                    Category
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Form ref={elementsRef} class="d-flex flex-col" className='ml-2'>
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
                                    </Form>
                                    <Button
                                        onClick={(e) => handleClearCategories(e)}
                                        className='btn-danger btn-sm '
                                    >
                                        Clear All
                                    </Button>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>


                        <Col xs={4} className='d-flex justify-center mb-3'>
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
                        </Col>

                        <Col xs={4} className='d-flex justify-center'>
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
                        </Col>
                    </Row>
                }
                <Row>
                    {
                        winSize[1]>=996 && 
                        <Col lg={2}>
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
                                        Clear All
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
                    }

                    <Col xs={12} md={12} lg={10}>
                        <NewsList Category={category} Country={country} SortBy={sortBy}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home