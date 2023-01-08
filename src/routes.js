import {  BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, About, Error, Product} from "./pages"


const RoutesApp = () => {
    return(
        <BrowserRouter>
            {/* <Header/> */}
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/about" element={ <About />} />
                <Route path="/product/:id" element={ <Product />} />

                <Route path="*" element={ <Error />} />
            </Routes>
        </BrowserRouter>
    )
}

 export default RoutesApp;