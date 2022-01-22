import { useState } from "react";
import '../css/AlimentForm.css'
import { Button } from '@material-ui/core'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function AlimentForm(props) {
    const { currentUser, } = props
    const [numeAliment, setNumeAliment] = useState('')
    const [dataExpirareAliment, setDataExpirareAliment] = useState('')
    const [categorieAliment, setCategorieAliment] = useState('')
    const [disponibilitateAliment, setDisponibilitateAliment] = useState('')

    const handleChange = (event) => {
        setCategorieAliment(event.target.value);
    };
    const handleChangeDisponibilitate = (event) => {
        setDisponibilitateAliment(event.target.value);
    };

    const addAliment = () => {
        console.log(currentUser.idUtilizator);
        console.log();
        console.log(numeAliment);
        console.log();
        console.log(dataExpirareAliment);
        console.log();
        console.log(categorieAliment);
        console.log();
        console.log(disponibilitateAliment);
        fetch(`http://localhost:7000/utilizatori/${currentUser.idUtilizator}/alimente`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                numeAliment: numeAliment,
                dataExpirareAliment: dataExpirareAliment,
                categorieAliment: categorieAliment,
                disponibilitateAliment: disponibilitateAliment
            })
        }).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                alert('Adaugare gresita de aliment!')
            }
        })

    }


    return (
        <div >
            <h1>Adauga aliment:</h1>
            <br></br>
            <label>Nume aliment: </label>
            <input type='text' placeholder='nume aliment' onChange={(evt) => setNumeAliment(evt.target.value)}></input>
            <br></br>
            <label>Data expirare: </label>
            <input type='date' placeholder='data expirare' onChange={(evt) => setDataExpirareAliment(evt.target.value)}></input>
            <br></br>


            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Categorie</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"

                    onChange={handleChange}

                >
                    <FormControlLabel value="patiserie" control={<Radio />} label="patiserie" />
                    <FormControlLabel value="legume" control={<Radio />} label="legume" />
                    <FormControlLabel value="fructe" control={<Radio />} label="fructe" />
                    <FormControlLabel value="dulciuri" control={<Radio />} label="dulciuri" />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Disponibilitate aliment:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"

                    onChange={handleChangeDisponibilitate}
                >
                    <FormControlLabel value="true" control={<Radio />} label="disponibil" />
                    <FormControlLabel value="false" control={<Radio />} label="indisponibil" />
                </RadioGroup>
            </FormControl>

            <Button onClick={(e) => {
                e.preventDefault()
                addAliment();
            }}
                type='submit' color="primary" fullWidth variant="outlined">Adaugare</Button>
        </div>
    )
}
export default AlimentForm