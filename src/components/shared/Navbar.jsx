import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from '../../context/ShoppingCartContext'
import { AppContext } from '../../context/AppContext';

const Navbar = () => {

    const { cart } = useContext(CartContext);
    const { user, setUser } = useContext(AppContext);

    return (
        <>
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to="/">
                        Start Bootstrap
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">
                                    Profile
                                </Link>
                            </li>

                            <li className="nav-item">
                                {
                                    !!user ? (
                                        <a className="nav-link" href='/#'>
                                            {user.email}
                                        </a>
                                    ) : (
                                        <button className='btn btn-success btn-sm my-1' onClick={() => {
                                            setUser({ email: 'lrodriguez@gmail.com' })
                                        }}>
                                            Login
                                        </button>
                                    )
                                }
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/detail">
                                    Detail
                                </Link>
                            </li> */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Shop
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            All Products
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            Popular Items
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#!">
                                            New Arrivals
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1" />
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">
                                    {cart.reduce((total, item) => total + item.quantity, 0)}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar