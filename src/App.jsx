 
import './App.css'
import { Home} from './pages/Home'
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import AccountSettings from './pages/Profile';


function App() {
   

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/profile' element={<AccountSettings/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
