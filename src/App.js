import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Formulario from './componentes/Formulario/Formulario.js';
import Header from './componentes/Header/Header.js';               //importar el Header
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false) // es el hook para ocultar el formulario

  const [colaboradores, actualizarColaboradores] = useState([
  {
    id: uuidv4(),
    equipo: "Front end",
    foto: "https://github.com/josa6f.png",
    nombre: "Josafath Fuentes ",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    equipo: "Programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesyss ",
    puesto: "Instructora",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "DevOps",
    foto: "https://github.com/josejesusguzman.png",
    nombre: "BrujeriaTech",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    equipo: "Front end",
    foto: "https://github.com/HarlandLohora.png",
    nombre: "Hardland",
    puesto: "Instructor",
    fav: false
  },
  
])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front end",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#82CFFA",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7EB",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
  ])

  //Ternario --> condicion ? seMuestra : noSeMuestra, si es verdadero seMuestra y sino noSeMuestra
  //condicion && seMuestra

  //

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //spread operator - los ... toma los valores actuales, los copia y despues se le agrega el nuevo colaborador
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar Colaborador

  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) =>{
      if (equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }])
  }

   //Like
    const like = (id) => {
      console.log("like", id)
      const colaboradoresActualizados = colaboradores.map((colaborador) => {
        if (colaborador.id === id) {
          colaborador.fav = !colaborador.fav
        }
        return colaborador
      })

      actualizarColaboradores(colaboradoresActualizados)
    }



  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} el sino noSeMuestra la etiqueta esta vacia para indicar que va vacio, es lo mismo que la linea de abajo */}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}

        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} /> {/*se utiliza un prop para enviar datos a componente MiOrg */}

      { 
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
        ) 
      }
      <Footer />

    </div>
  );
}

export default App;
