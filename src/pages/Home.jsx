import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Header from '../components/shared/Header'
const Home = () => {

    const [urlAPI] = useState("https://rickandmortyapi.com")
    const [characters, setCharacters] = useState(null)

    const [miDato, setMiDato] = useState("")
    const [miDato2, setMiDato2] = useState("")

    useEffect(() => {

        cargarDatos();

        getCharacters(`${urlAPI}/api/character`)

    }, [])


    const getCharacters = (url, options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }) => {
        fetch(url, options)
            .then(response => response.json())
            .then(result => setCharacters(result))
            .catch(error => console.log(error.message))
    }

    const guardarDatos = () => {
        sessionStorage.setItem('miDato', miDato)
    }
    const guardarDatos2 = () => {
        localStorage.setItem('miDato2', miDato2)
    }

    const cargarDatos = () => {
        if(sessionStorage.getItem('miDato')){
            setMiDato(sessionStorage.getItem('miDato'))
        }

        if(localStorage.getItem('miDato2')){
            setMiDato2(localStorage.getItem('miDato2'))
        }
    }

    const eliminarDatos = () => {
        sessionStorage.removeItem('miDato')
    }
    const eliminarDatos2 = () => {
        localStorage.removeItem('miDato2')
    }

    return (
        <>
            <Header />
            {/* Section*/}
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row">
                        <div className="col-md-12 py-3">
                            <div className="input-group">
                                <input value={miDato} className='form-control' type="text" onChange={(e) => setMiDato(e.target.value)} />
                                <button className="btn btn-primary btn-sm" onClick={guardarDatos}>Guardar</button>
                                <button className="btn btn-danger btn-sm" onClick={eliminarDatos}>Eliminar</button>
                            </div>
                        </div>
                        <div className="col-md-12 py-3">
                            <div className="input-group">
                                <input value={miDato2} className='form-control' type="text" onChange={(e) => setMiDato2(e.target.value)} />
                                <button className="btn btn-primary btn-sm" onClick={guardarDatos2}>Guardar</button>
                                <button className="btn btn-danger btn-sm" onClick={eliminarDatos2}>Eliminar</button>
                            </div>
                        </div>
                    </div>
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