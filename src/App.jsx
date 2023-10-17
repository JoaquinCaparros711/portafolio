import { NavBar } from './components/NavBar';
import { Inicio } from './components/Inicio';
import { Proyectos } from './components/Proyectos';
import { Habilidades } from './components/Habilidades';
import { SobreMi } from './components/SobreMi';
import { Contact } from './components/Contact';



function App() {

  return (
    <>
      <NavBar />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Habilidades />
      <Contact />
    </>
  )
}

export default App
