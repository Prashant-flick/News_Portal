import {useState, useRef, useEffect} from 'react'
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Container
} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toggleMode } from '../Store/ColorModeSlice'

function NavBar() {
    const [showhover, setshowhover] = useState(false)
    const colorMode = useSelector((state) => state.ColorModeReducer?.colorMode)

    const switchRef = useRef()
    useEffect(() => {
        let element = document.body;
        element.dataset.bsTheme = colorMode
        switchRef.current.checked = colorMode == 'light' ? false : true; 
    }, [colorMode])

    const dispatch = useDispatch()

    const searchRef = useRef()
    const navigate = useNavigate()

    const handlecolorMode = (e) => {
        dispatch(toggleMode())
    }

    const handleSearchTerm = (e) => {
        e.preventDefault()
        navigate(`/?q=${e.target.search.value}`)
    }

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/" className="fw-bold fs-1">
                    NewsLetter
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbar-nav" />

                <Navbar.Collapse id="navbar-nav" className='justify-between'>
                    <Form
                        className='mr-4'
                    >
                        <Form.Check 
                            ref={switchRef}
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
                    className='border-1 border-black bg-red-500 w-8 h-8 rounded-full flex justify-center items-center pt-1'
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
    )
}

export default NavBar