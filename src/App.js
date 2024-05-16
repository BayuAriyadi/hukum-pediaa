import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './Pages/Home';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Regist' element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
