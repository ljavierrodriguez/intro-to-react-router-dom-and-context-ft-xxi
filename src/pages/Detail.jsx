import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useNavigate, useParams } from 'react-router-dom'

const Detail = () => {

    const [others, setOthers] = useState(null)

    const params = useParams();

    const navigate = useNavigate();

    const [urlAPI] = useState("https://rickandmortyapi.com")
    const [character, setCharacter] = useState({
        id: 0,
        name: 'Unknown',
        gender: 'Unknown',
        image: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        species: 'Unknown'
    })

    useEffect(() => {
        //console.log(params)
        getCharacterById(`${urlAPI}/api/character/${params.id}`)
        const ids = getRamdonCharacters();
        //console.log(ids)
        //console.log(`${urlAPI}/api/character/${ids}`)
        getOtherCharacters(`${urlAPI}/api/character/${ids}`)
    }, [params.id])

    const getRamdonCharacters = (size = 4) => {
        const ids = []
        for (let i = 0; i < size; i++) {
            ids.push((Math.floor(Math.random() * 826) + 1))
        }
        return ids;
    }

    const getOtherCharacters = (url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }) => {
        fetch(url, options)
            .then(response => response.json())
            .then(result => setOthers(result))
            .catch(error => console.log(error.message))
    }


    /* const getCharacterById = (url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }) => {
        fetch(url, options)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setCharacter(result)
            })
            .catch(error => console.log(error.message))
    } */

    const getCharacterById = async (url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }) => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result)
            setCharacter(result)
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <>
            {/* Product section*/}
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <img
                                className="card-img-top mb-5 mb-md-0"
                                src={character?.image}
                                alt="..."
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="small mb-1">{character?.species}</div>
                            <h1 className="display-5 fw-bolder">{character?.name}</h1>
                            <h5 className="fw-bolder">{character?.gender}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn btn-warning my-3"
                                onClick={() => {
                                    navigate("/")
                                }}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Related items section*/}
            <section className="py-5 bg-light">
                <div className="container px-4 px-lg-5 mt-5">
                    <h2 className="fw-bolder mb-4">Other Characters</h2>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {
                            !!others &&
                            others.map((character) => {
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

export default Detail