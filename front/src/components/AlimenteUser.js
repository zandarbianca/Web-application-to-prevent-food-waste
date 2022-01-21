import React, { useEffect, useState } from "react";
import ListaAlimente from './ListaAlimente'
function AlimenteUser(props) {

    const { currentUser, } = props
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


    useEffect(aduceListaAlimenteDinBazaDeDate, [currentUser])

    return (
        <>
        <div>LISTA ALIMENTELOR USERULUI {currentUser.numeUtilizator} </div>

        <div>PATISERIE</div>
            <ul className='alimente'>
                {alimente.filter(aliment => aliment.utilizatorIdUtilizator == currentUser.idUtilizator)
                .filter(aliment => aliment.categorieAliment == "patiserie")
                         .map((aliment, index) => (
                        <ListaAlimente key={index} item={aliment} />
                    ))}
            </ul>

            <div>LEGUME</div>
            <ul className='alimente'>
                {alimente.filter(aliment => aliment.utilizatorIdUtilizator == currentUser.idUtilizator)
                .filter(aliment => aliment.categorieAliment == "legume")
                         .map((aliment, index) => (
                        <ListaAlimente key={index} item={aliment} />
                    ))}
            </ul>

            <div>FRUCTE</div>
            <ul className='alimente'>
                {alimente.filter(aliment => aliment.utilizatorIdUtilizator == currentUser.idUtilizator)
                .filter(aliment => aliment.categorieAliment == "fructe")
                         .map((aliment, index) => (
                        <ListaAlimente key={index} item={aliment} />
                    ))}
            </ul>

            <div>DULCIURI</div>
            <ul className='alimente'>
                {alimente.filter(aliment => aliment.utilizatorIdUtilizator == currentUser.idUtilizator)
                .filter(aliment => aliment.categorieAliment == "dulciuri")
                         .map((aliment, index) => (
                        <ListaAlimente key={index} item={aliment} />
                    ))}
            </ul>

        </>
    )
}

export default AlimenteUser