import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Law from './Pages/Law';
import ErrorPages from './Pages/ErrorPages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Regist' element={<Register />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Law' element={<Law />}/>
        <Route path='/ErrorPages' element={<ErrorPages />}/>
      </Routes>
    </Router>
  );
}

export default App;
