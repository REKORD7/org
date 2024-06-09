import "./Collaborator.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Collaborator = (props) => {
    const { name, position, photo, team, id, fav } = props.data;
    const { primaryColor, deleteCollaborator, like } = props;

    //condicion ? verdadero : falso


    return <div className="collaborator">
        <AiFillCloseCircle className="delete" onClick={() => deleteCollaborator(id)} />
        <div className="header" style={{ backgroundColor: primaryColor }}>
            <img src={photo} alt={name} />
        </div>
        <div className="info">
            <h4>{name}</h4>
            <h5>{position}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)} />}
        </div>
    </div>
}

export default Collaborator