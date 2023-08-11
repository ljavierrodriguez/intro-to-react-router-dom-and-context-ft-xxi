import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto';

const Contact = () => {

    const [data, setData] = useState({
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    })


    useEffect(() => {
        let ctx1 = document.getElementById('myChart1');
        let ctx2 = document.getElementById('myChart2');
        let myChart1 = loadChart(ctx1);
        let myChart2 = loadChart2(ctx2, data)
        return () => {
            myChart1.destroy();
            myChart2.destroy();
        }
    }, [data])


    const loadChart = (ctx) => {
        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }

        })
    }

    const loadChart2 = (ctx, data) => {
        return new Chart(ctx, {
            type: 'doughnut',
            data: data
        })
    }

    return (
        <>
            {/* Page content*/}
            <section className="py-5">
                <div className="container px-5">
                    {/* Contact form*/}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <div className="btn btn-primary bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-envelope" />
                            </div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">
                                We'd love to hear from you
                            </p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                {/* * * * * * * * * * * * * * * **/}
                                {/* * * SB Forms Contact Form * **/}
                                {/* * * * * * * * * * * * * * * **/}
                                {/* This form is pre-integrated with SB Forms.*/}
                                {/* To make this form functional, sign up at*/}
                                {/* https://startbootstrap.com/solution/contact-forms*/}
                                {/* to get an API token!*/}
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/* Name input*/}
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="name"
                                            type="text"
                                            placeholder="Enter your name..."
                                            data-sb-validations="required"
                                        />
                                        <label htmlFor="name">Full name</label>
                                        <div
                                            className="invalid-feedback"
                                            data-sb-feedback="name:required"
                                        >
                                            A name is required.
                                        </div>
                                    </div>
                                    {/* Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            data-sb-validations="required,email"
                                        />
                                        <label htmlFor="email">Email address</label>
                                        <div
                                            className="invalid-feedback"
                                            data-sb-feedback="email:required"
                                        >
                                            An email is required.
                                        </div>
                                        <div
                                            className="invalid-feedback"
                                            data-sb-feedback="email:email"
                                        >
                                            Email is not valid.
                                        </div>
                                    </div>
                                    {/* Phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="phone"
                                            type="tel"
                                            placeholder="(123) 456-7890"
                                            data-sb-validations="required"
                                        />
                                        <label htmlFor="phone">Phone number</label>
                                        <div
                                            className="invalid-feedback"
                                            data-sb-feedback="phone:required"
                                        >
                                            A phone number is required.
                                        </div>
                                    </div>
                                    {/* Message input*/}
                                    <div className="form-floating mb-3">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            type="text"
                                            placeholder="Enter your message here..."
                                            style={{ height: "10rem" }}
                                            data-sb-validations="required"
                                            defaultValue={""}
                                        />
                                        <label htmlFor="message">Message</label>
                                        <div
                                            className="invalid-feedback"
                                            data-sb-feedback="message:required"
                                        >
                                            A message is required.
                                        </div>
                                    </div>
                                    {/* Submit success message*/}
                                    {/**/}
                                    {/* This is what your users will see when the form*/}
                                    {/* has successfully submitted*/}
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">
                                                https://startbootstrap.com/solution/contact-forms
                                            </a>
                                        </div>
                                    </div>
                                    {/* Submit error message*/}
                                    {/**/}
                                    {/* This is what your users will see when there is*/}
                                    {/* an error submitting the form*/}
                                    <div className="d-none" id="submitErrorMessage">
                                        <div className="text-center text-danger mb-3">
                                            Error sending message!
                                        </div>
                                    </div>
                                    {/* Submit Button*/}
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-primary btn-lg disabled"
                                            id="submitButton"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Contact cards*/}
                    <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
                        <div className="col">
                            <div className="btn btn-primary bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-chat-dots" />
                            </div>
                            <div className="h5 mb-2">Chat with us</div>
                            <p className="text-muted mb-0">
                                Chat live with one of our support specialists.
                            </p>
                        </div>
                        <div className="col">
                            <div className="btn btn-primary bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-people" />
                            </div>
                            <div className="h5">Ask the community</div>
                            <p className="text-muted mb-0">
                                Explore our community forums and communicate with other users.
                            </p>
                        </div>
                        <div className="col">
                            <div className="btn btn-primary bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-question-circle" />
                            </div>
                            <div className="h5">Support center</div>
                            <p className="text-muted mb-0">
                                Browse FAQ's and support articles to find solutions.
                            </p>
                        </div>
                        <div className="col">
                            <div className="btn btn-primary bg-primary bg-gradient text-white rounded-3 mb-3">
                                <i className="bi bi-telephone" />
                            </div>
                            <div className="h5">Call us</div>
                            <p className="text-muted mb-0">
                                Call us during normal business hours at (555) 892-9403.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <canvas id="myChart1"></canvas>
                        </div>
                        <div className="col-md-6">
                            <canvas id="myChart2"></canvas>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact