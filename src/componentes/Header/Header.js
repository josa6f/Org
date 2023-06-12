import "./Header.css" //importar archivo Header.css

function Header () { //los elementos deben de estar envueltos por una etiqueta padre
    return <header className="header">
        <img src="/img/Header.png" alt='Org' />
    </header>
    
}

export default Header  //Mandamos a llamar el archivo Header.js