import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Estilo y calidad en tu hogar"}/>
      
    </div>
  );
}

export default App;
