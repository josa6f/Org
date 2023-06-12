import "./ListaOpciones.css"

const ListaOpciones = (props) => {

const manejarCambio = (e) => {
    props.actualizarEquipo(e.target.value)
}

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index}value={equipo}>{equipo}</option>)} {/*manamos a llamar el arreglo con map ponermos los parametros de equipo y el index y regresa la etiqueta option*/}
        </select>
    </div>
}

export default ListaOpciones