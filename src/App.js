import logo from './logo.svg';
import './App.css';
import Hola from './components/Hola'
import Footer from './components/Footer'
import Veterinaria from './components/clase5/Veterinaria';
import Perritos from './components/clase5/db/Perritos';
function App() {
  return (
    
    <div className="container">
      <div className='row'>
      <Veterinaria perritos={Perritos}/>
      </div>
      {/* <Hola color="red" key="1" nombre="Felicitas" apellido="Herrera"/>
      <Hola color="beige" nombre="Juan"/>
      <Hola color="yellow" nombre="Pedro"/>
      <Footer color="green"/> */}
      
    </div>
  );
}

export default App;
