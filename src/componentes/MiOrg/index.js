import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => { // se prepara el componente para recibir las propiedades de App.js

    //Estado - hooks, que son funcionalidades que nos ayudan a trabajar con el comportamiento de react
    //useState
    //const [nombreVariable,funcionActual] = useState(valorInicial)

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} /> {/*se pone el props de App.js*/}
    </section>
}

export default MiOrg