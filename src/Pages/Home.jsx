import {useState, useRef} from 'react'
import {
    Row,
    Col,
    Nav,
    Form,
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
    
    //here useSize custom hook is used to get the window size of every window resize event
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
    const navigate = useNavigate()

    const handleCategoryClick = (e) => {
        console.log(e.target.name);
        if(e.target.checked === true){
            setcategory((prev) => [e.target.name, ...prev])
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

    return (
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
    )
}

export default Home