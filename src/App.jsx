import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBS from './components/NavBarBS';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorComponent from './components/ErrorComponent';



function App() {

  console.log('app')

  // const saludar = () => {
  //   console.log('Hola Chicos!')
  // }

  // const despedir = () => {
  //   console.log('Adios Chicos!')
  // }

  // const log = () => {
  //   console.log('click!')
  // }

  // const parametrosConEventos = (text) => {
  //   console.log(text)
  // }

  // instalar libreria de navegacion ->
  // npm i react-router-dom

  return (
    <BrowserRouter>
      <NavBarBS />
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='Bienvenidos a mi app' />} />
        <Route path='/categories/:category' element={<ItemListContainer mensaje='Bienvenido a nuestra categoria' />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/*' element={<ErrorComponent/>} />
      </Routes>

      
      {/* <ItemCount /> */}
    </BrowserRouter>

  )
}

export default App
