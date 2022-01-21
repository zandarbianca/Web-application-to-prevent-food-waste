import React, { useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";


const SERVER = 'http://localhost:7000'

function ListaAlimente (props){
    const { item } = props;
    const [aliment,setAliment] = useState(null)

    useEffect(async() => {
        const response = await fetch(`${SERVER}/alimente`)
        const data = await response.json()
        const aliment = data.find((e) => e.idAliment === item.id)
        setAliment(aliment)
    }, []);
    
    return (
        <div className='aliment'>
          <div className='numeAliment'>numeAliment: {item.numeAliment}</div>
          <div className='dataExpirareAliment'>dataExpirareAliment: {item.dataExpirareAliment
          }</div>
          <div className='categorieAliment'>categorieAliment: {item.categorieAliment}</div>
          <div>
        <span className='disponibilitateAliment'>disponibilitateAliment: {item.disponibilitateAliment}</span>
          <Checkbox/>
          </div>
         
         
        </div>
      )

     
} export default ListaAlimente