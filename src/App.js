import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Apod from './pages/Apod';
import ViewApod from './pages/ViewApod'
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Wildfires from './pages/Wildfires';

function App() {
  

  return (
    <div className='App' style={{backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Starsinthesky.jpg/1280px-Starsinthesky.jpg')`}}>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Apod/>}/>
        <Route path='/nasaapod' element={<ViewApod/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/wildfires' element={<Wildfires/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
