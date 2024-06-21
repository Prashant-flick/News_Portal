import {
    NavBar
} from "./Component/index"
import { Outlet } from "react-router-dom"

function App() {

    return(
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default App
