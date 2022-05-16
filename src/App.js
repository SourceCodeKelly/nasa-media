import './App.scss';
import Header from './components/Header';
import Nav from './components/Nav';
import NewMedia from './pages/NewMedia';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <NewMedia/>
      <Footer/>
    </div>
  );
}

export default App;
