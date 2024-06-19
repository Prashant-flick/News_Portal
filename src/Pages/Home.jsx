import {useEffect, useState} from 'react'
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

function Home() {
    const [category, setcategory] = useState([])
    const [sortBy, setsortBy] = useState("")
    const [country, setcountry] = useState("")

    console.log(category);

    const countries = [
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

                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                name="search"
                            />

                            <Button type="submit" variant="outline-primary" className="me-2">
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>

                    <Button variant="primary" className="rounded-2">
                        LogIn
                    </Button>
                </Container>
            </Navbar>

            <Container>
                <Row>
                    <Col xs={12} md={2}>
                        <h5>Categories</h5>
                        <Nav className='flex-column mb-4'>
                            <Form>
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => {
                                        if(e.target.checked === true){
                                            setcategory((prev) => [...prev, "World"])
                                        }else{
                                            setcategory((prev) => prev.filter((elem) => elem!=="World"))
                                        }
                                    }}
                                    type='checkbox'
                                    id='default-checkbox-1'
                                    label='World'
                                    className='text-primary link-secondary'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => {
                                        if(e.target.checked === true){
                                            setcategory((prev) => [...prev, "Business"])
                                        }else{
                                            setcategory((prev) => prev.filter((elem) => elem!=="Business"))
                                        }
                                    }}
                                    type='checkbox'
                                    id='default-checkbox-2'
                                    label='Business'
                                    className='text-primary link-secondary'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => {
                                        if(e.target.checked === true){
                                            setcategory((prev) => [...prev, "Technology"])
                                        }else{
                                            setcategory((prev) => prev.filter((elem) => elem!=="Technology"))
                                        }
                                    }}
                                    type='checkbox'
                                    id='default-checkbox-3'
                                    label='Technology'
                                    className='text-primary link-secondary'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => {
                                        if(e.target.checked === true){
                                            setcategory((prev) => [...prev, "Sports"])
                                        }else{
                                            setcategory((prev) => prev.filter((elem) => elem!=="Sports"))
                                        }
                                    }}
                                    type='checkbox'
                                    id='default-checkbox-4'
                                    label='Sports'
                                    className='text-primary link-secondary'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => {
                                        if(e.target.checked === true){
                                            setcategory((prev) => [...prev, "Entertainment"])
                                        }else{
                                            setcategory((prev) => prev.filter((elem) => elem!=="Entertainment"))
                                        }
                                    }}
                                    type='checkbox'
                                    id='default-checkbox-5'
                                    label='Entertainment'
                                    className='text-primary link-secondary'
                                />
                                <Form.Check
                                    defaultChecked={false}
                                    onClick={(e) => {
                                        if(e.target.checked === true){
                                            setcategory((prev) => [...prev, "Politics"])
                                        }else{
                                            setcategory((prev) => prev.filter((elem) => elem!=="Politics"))
                                        }
                                    }}
                                    type='checkbox'
                                    id='default-checkbox-6'   
                                    label='Politcs'
                                    className='text-primary link-secondary'
                                />
                                <Button
                                    onClick={(e)=> {
                                        e.preventDefault()
                                        
                                    }}
                                    variant='secondary'
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
                                    <Dropdown.Item>
                                        publishedAt
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        popularity
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
                                                <Dropdown.Item id={index}>
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
                        <NewsList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home