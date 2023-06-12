import { useState } from "react";
import "./Campo.css"
const Campo = (props) => {  //es el componente de campo texto en el formulario, con el props que son las propiedades de los componentes
    const placeholderModificdo = `${props.placeholder}...`; {/*aqui se crea la constante con el valor placeholder*/}

    //Desructuracion
    const {type = "text"} = props


    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{ props.titulo}</label>  {/*se llama el props con el titulo de elemento de formulario*/}
        <input 
        placeholder={placeholderModificdo} 
        required={props.required} 
        value={props.valor} //para que los campos sean requeridos mediante props
        onChange={manejarCambio} //recinimos la constante manejarCambio
        type={type}
        />
    </div>
    
}

export default Campo