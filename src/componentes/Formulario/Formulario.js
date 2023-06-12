import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo.js" //se importa el componente CampoTexto
import ListaOpciones from "../ListaOpciones" // ya no se pone el nombre del archivo porque se le puso al nombre del archivo index.js
import Boton  from "../Boton"

const Formulario = (props) => {  //componente de formulario
    
    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault() //para quitar el evento de recargar la pagina al presionar el boton, el evento es llamado como e
        console.log("Manejar el envio")
        let datosSEnviar = {  //es un objeto
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosSEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre}/> {/*campo texto se vuelve hijo de formulario y la colocaion de nombre de campo se puede hacer asi o como esta asi o como la que esta en la etiqueta <Boton> */}
            <Campo
                titulo="Puesto" 
                placeholder="Ingresa puesto" 
                required //cualquier de los dos required es valido 
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto" 
                placeholder="Ingresa enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos} 
            />
            <Boton>Crear</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo}/> {/*campo texto se vuelve hijo de formulario y la colocaion de nombre de campo se puede hacer asi o como esta asi o como la que esta en la etiqueta <Boton> */}
            <Campo
                titulo="Color" 
                placeholder="Ingresa el color en hex" 
                required //cualquier de los dos required es valido 
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario