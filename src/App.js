import './App.css';
import Header from './components/Header.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, } from 'react-router-dom';
import CardsDetail from './components/CardsDetail';
import Cards from './components/Cards';
// import './style.css'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />}/>
        <Route path='/cart/:id' element={<CardsDetail />}/>
        <Route path='/*' element={<h1>Page not found</h1>}/>

      </Routes>
    </div>
  );
}

export default App;
