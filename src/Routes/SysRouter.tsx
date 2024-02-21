
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Main from '../pages/Main'

const SysRouter = () => {
  return (
    <Routes>
       <Route path='/' index element={<Login/>}/>
       <Route path='/main' element={<Main/>}/>
    </Routes>
  )
}

export default SysRouter
