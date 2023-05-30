import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={"Estilo y calidad en tu hogar"}/>
      <ItemCount  initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
      
    </div>
  );
}

export default App;
