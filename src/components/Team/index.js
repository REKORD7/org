import "./Team.css"
import Collaborator from "../Collaborator";
import hexToRgba from 'hex-to-rgba';


const Team = (props) => {
    //Destructuracion
    const {title, primaryColor, secondaryColor, id} = props.data;
    const { collaborators, deleteCollaborator, updateColor, like } = props;

    const objStyle = { backgroundColor: hexToRgba(primaryColor, 0.5)  };

    const titleStyle = { borderColor: primaryColor }
    return <>
        { collaborators.length>0 &&
            <section className="team" style={ objStyle }>
                <input
                    type="color"
                    className="inputColor"
                    value={primaryColor}
                    onChange={(event) => { 
                        updateColor(event.target.value, id)
                    }}
                />
                <h3 style={titleStyle}>{title}</h3>
                <div className="collaborators">
                    {
                        collaborators.map( (collaborator,index) => <Collaborator 
                            data={collaborator} 
                            key={index} 
                            primaryColor={primaryColor}
                            deleteCollaborator={deleteCollaborator}
                            like={like}
                        /> )
                    }
                </div>
            </section>
        }
    </>
}

export default Team