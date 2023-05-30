import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={"Estilo y calidad en tu hogar"}/>
      <ItemDetailContainer/>
      
    </div>
  );
}

export default App;
