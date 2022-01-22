import React, { useEffect, useState } from "react";
import ListaAlimente from './ListaAlimente'



function AlimenteUser(props) {

    const { currentUser, } = props
    const [alimente, setAlimente] = useState([])
    // var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    // var streetaddress;
    // var todayDate = new Date().toISOString().slice(0, 10);

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

    // useEffect(verificareExpirare)

    // function verificareExpirare(){
    //     alimente.forEach(aliment => {
    //         let dataExpirare = aliment.dataExpirareAliment.substring(0, 10);
    //        // console.log(dataExpirare);
    //         let an = aliment.dataExpirareAliment.substring(0,4);
    //         let luna = aliment.dataExpirareAliment.substring(5,7 );
    //         let zi = aliment.dataExpirareAliment.substring(8,10);
    
    //         let anc = aliment.dataExpirareAliment.substring(0,4);
    //         let lunac = aliment.dataExpirareAliment.substring(5,7 );
    //         let zic = aliment.dataExpirareAliment.substring(8,10);
    
    //         if(an == anc){
    //             if(luna == lunac){
    //                 if(zic - zi <= 3){
    //                     alert(`Expira !`);
    //                 }
    //             }
    //         }
                        
    //     })
    // }
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