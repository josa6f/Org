import "./Boton.css"

const Boton = (props) => {
    return <button className="boton">{props.children}</button> // aqui el props.children es el nombre que llevara el boton que viene desde el formulario, que children es el texto que viene entre las etiquetas <Boton> del archivo formulario
}

export default Boton