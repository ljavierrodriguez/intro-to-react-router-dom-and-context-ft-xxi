import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Contact from './pages/Contact'

const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/character/:id/detail" element={<Detail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Layout