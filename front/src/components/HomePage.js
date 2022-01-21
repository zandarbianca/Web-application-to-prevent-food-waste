import React, { useEffect, useState } from "react";
import ListaAlimente from './ListaAlimente'
import Button from "@material-ui/core/Button";
import '../css/ListAlimente.css'
function HomePage() {
    const [currentPage, setCurrentPage] = useState('Home')

    const [alimente, setAlimente] = useState([])

    const aduceListaAlimenteDinBazaDeDate = () => {
        fetch(`http://localhost:7000/alimente`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Error')
                }
            })
            .then((data) => {
                setAlimente(data)
            })
    }

    useEffect(aduceListaAlimenteDinBazaDeDate, [])

    return (
        <>
            <ul className='alimente'>
                {alimente.map((aliment, index) => (
                    <ListaAlimente key={index} item={aliment} />
                ))}
            </ul>
        </>
    )
}

export default HomePage