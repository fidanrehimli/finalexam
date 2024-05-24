
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header/Header'
import Detail from './pages/Detail'
import Form from './pages/Form'
import Home from './pages/Home/Home'
import Pages from './pages/Pages'
import Shop from './pages/Shop'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pages' element={<Pages/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/:detailid' element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
