import { useState } from 'react';
import './Form.css';
import Input from '../Input';
import OptionList from '../OptionList';
import Button from '../Button';

const Form = (props) => {

    const [name, updateName] = useState("");
    const [position, updatePosition] = useState("");
    const [photo, updatePhoto] = useState("");
    const [team, updateTeam] = useState("");
    
    const [title, updateTitle] = useState("");
    const [color, updateColor] = useState("");

    const { addCollaborator, addTeam } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        let dataToSend = {
            name : name,
            position : position,
            photo : photo,
            team: team
        }
        addCollaborator(dataToSend);
    }

    const handleNewTeam = (e) => {
        e.preventDefault();
        addTeam({ title, primaryColor: color })
    }

    return <section className="form">
        <form onSubmit={handleSubmit}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Input 
                titulo="Nombre" 
                placeholder="nombre" 
                required 
                value={name} 
                updateValue={updateName}
            />
            <Input 
                titulo="Puesto" 
                placeholder="puesto"
                required 
                value={position} 
                updateValue={updatePosition}
            />
            <Input 
                titulo="Foto" 
                placeholder="enlace de foto" 
                required 
                value={photo} 
                updateValue={updatePhoto}
            />
            <OptionList 
                value={team} 
                updateTeam={updateTeam}
                teams={props.teams}
            />
            <Button>Crear</Button>
        </form>
        <form onSubmit={handleNewTeam}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Input 
                titulo="Titulo" 
                placeholder="Titulo" 
                required 
                value={title} 
                updateValue={updateTitle}
            />
            <Input 
                titulo="Color" 
                placeholder="color en Hexadecimal"
                required 
                value={color} 
                updateValue={updateColor}
                type="color"
            />
            <Button>Registrar equipo</Button>
        </form>
    </section>
}

export default Form