import 'remixicon/fonts/remixicon.css';
import 'animate.css';
import{
  BrowserRouter,
  Routes,
  Route
}from 'react-router-dom'
import { fromJSON } from 'postcss';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Device from './Components/Device';
import Doctor from './Components/Doctor';
import Patient from './Components/Patient';
import Prescription from './Components/Prescription';


const App=()=> {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/device' element={<Device/>}></Route>
      <Route path='/doctor' element={<Doctor/>}></Route>
      <Route path='/patient' element={<Patient/>}></Route>
      <Route path='/prescription' element={<Prescription/>}></Route>
     
    
    </Routes>
    </BrowserRouter>
  
)
} 
export default App