import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/ErrorPage"
import Glairy from "./components/Glairy"
import Home from "./components/hero/Home"
import NavBar from "./components/navbar/NavBar"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
const rooter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/glairy" element={<Glairy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
)

const App = () => {
    return (
        <div>
            <RouterProvider router={rooter} />
        </div>
    )
}

export default App
