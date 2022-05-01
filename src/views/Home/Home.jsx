import './Home.css'
import PaletaLista from 'componentes/PaletaLista/PaletaLista'
import Navbar from 'componentes/Navbar/Navbar'
function Home() {
  return <div className="Home">
      <Navbar/>
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  
}

export default Home
