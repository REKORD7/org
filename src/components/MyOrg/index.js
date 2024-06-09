import { useState } from "react";
import "./MyOrg.css";

const MyOrg = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable, funcionActualizada] = useState(valorInicial)

    // const [show, updateShow] = useState(true);

    // const handleClick = () => {
    //     updateShow(!show)
    // }



    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="./img/add.png" alt="add" onClick={props.changeShow}></img>
    </section>
}

export default MyOrg