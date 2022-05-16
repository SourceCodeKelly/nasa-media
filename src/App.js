import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Apod from './pages/Apod';
import ViewApod from './pages/ViewApod'
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Apod/>}/>
        <Route path='/nasaapod' element={<ViewApod/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
