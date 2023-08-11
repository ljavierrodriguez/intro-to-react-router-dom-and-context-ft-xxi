import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Header from '../components/shared/Header'
const Home = () => {

    const [urlAPI] = useState("https://rickandmortyapi.com")
    const [characters, setCharacters] = useState(null)

    useEffect(() => {

        getCharacters(`${urlAPI}/api/character`)

    }, [])


    const getCharacters = (url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }) => {
        fetch(url, options)
            .then(response => response.json())
            .then(result => setCharacters(result))
            .catch(error => console.log(error.message))
    }

    return (
        <>
            <Header />
            {/* Section*/}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            !!characters &&
                            characters?.results.map((character) => {
                                return (
                                    <div className="col mb-5" key={character.id}>
                                        <Card {...character} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home