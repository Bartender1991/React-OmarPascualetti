import './App.css'
import NavBar from './components/NavBar'

import ItemCount from './components/ItemCount'

function App() {

  const saludar = () => {
    console.log('Hola Chicos!')
  }

  const despedir = () => {
    console.log('Adios Chicos!')
  }

  const log = () => {
    console.log('click!')
  }

  const parametrosConEventos = (text) => {
    console.log(text)
  }

  return (
    <>
      <NavBar />
      <ItemCount />

      {/* voy por la 2.29 hs del video  */}

      {/* <BotonMultiuso color={"yellow"} padding={"1rem"} borderRadius={"10%"} onClickHandler={saludar} />
      <BotonMultiuso color={"red"} padding={"0.5rem"} borderRadius={"10%"} onClickHandler={despedir} />
      <BotonMultiuso color={"#0dff00ff"} padding={"1.5rem"} borderRadius={"10%"} onClickHandler={log} />

      <ComponenteConChildren />

      <ComponenteConChildren>
        <p>hola soy una children</p>

        <BotonMultiuso
          color={"#0dff00ff"}
          padding={"1.5rem"}
          borderRadius={"10%"}
          onClickHandler={log} />

        <BotonMultiuso color={"#0dff00ff"} padding={"1.5rem"} borderRadius={"10%"} onClickHandler={log} parametrosConEventos={parametrosConEventos} />
      </ComponenteConChildren> */}
    </>
  )
}

export default App
