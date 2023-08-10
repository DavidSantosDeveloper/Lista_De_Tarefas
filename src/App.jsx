import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contato from './pages/Configuration/Configuration'

export default function App() {
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>} ></Route>
                <Route path='/config' element={<Contato></Contato>} ></Route>
            </Routes>
       </BrowserRouter> 
    </>
  )
}
