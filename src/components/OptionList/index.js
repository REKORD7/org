import "./OptionList.css"

const OptionList = (props) => {
    // Metodo map -> arreglo.map( (equipo,index) => {
    // return <option></option>
    // })

    const handleChange = (e) => {
        props.updateTeam(e.target.value);
    }

    return <div className="optionList">
        <label>Equipos</label>
        <select value={props.value} onChange={handleChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {
                props.teams.map( (team, index) => <option key={index} value={team}>{team}</option>)
            }
        </select>
    </div>
}

export default OptionList;