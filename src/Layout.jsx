import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import UserContext from './context/UserContext'
import ShoppingCartContext from './context/ShoppingCartContext'
import setAppContext, { AppContext } from './context/AppContext'


import ExampleComponent from './pages/Prueba';
import PrivateRoute from './pages/PrivateRoute'
import Profile from './pages/Profile'

const Layout = () => {

    const { user } = useContext(AppContext)

    return (
        <>
            <UserContext>
                <ShoppingCartContext>
                    <BrowserRouter>
                        <Navbar />
                        <ExampleComponent />
                        <Routes>
                            <Route path="/character/:id/detail" element={<Detail />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path='/profile' element={<PrivateRoute user={user}><Profile /></PrivateRoute>} />
                            <Route path="/" element={<Home />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </ShoppingCartContext>
            </UserContext>
        </>
    )
}

export default setAppContext(Layout);