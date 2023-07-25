import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"

import { AnimatedRoutes } from "../../hoc/AnimatedRoutes/AnimatedRoutes"


const App = () => {
    return (
        <BrowserRouter>
            <AnimatedRoutes/>
        </BrowserRouter>
    )
}
export default App