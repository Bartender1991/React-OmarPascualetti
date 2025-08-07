import './App.css'
import NavBar from './components/NavBar'

import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBS from './components/NavBarBS';



function App() {

  console.log('app')

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
      <NavBarBS />
      <ItemListContainer mensaje='Bienvenidos a mi app'/>

    </>

  )
}

export default App
