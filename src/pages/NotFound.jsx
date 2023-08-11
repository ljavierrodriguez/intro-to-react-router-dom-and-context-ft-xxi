import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div class="d-flex flex-column align-items-center justify-content-center vh-100 bg-primary">
            <h1 class="display-1 fw-bold text-white">404</h1>
            <button className="btn btn-warning" onClick={() => navigate(-1)}>
                Back
            </button>
        </div>
    )
}

export default NotFound