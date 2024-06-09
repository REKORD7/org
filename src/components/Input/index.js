import "./Input.css"

const Input = (props) => {
    const completePlaceholder = `Ingresar ${props.placeholder}...`;

    //Destructuracion
    const { type = "text" } = props;

    const handleChange = (e) => {
        props.updateValue(e.target.value);
    }

    return (<div className={ `Input Input-${type}`  }>
        <label>{props.titulo}</label>
        <input placeholder = {completePlaceholder} 
            required={props.required} 
            value={props.value} 
            onChange={handleChange}
            type={type}
        />
    </div>)
}

export default Input