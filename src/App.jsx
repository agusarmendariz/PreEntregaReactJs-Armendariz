import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <Route path='/' element ={<ItemListContainer/>}/>
      <Route path='/categoria/:categoriaId' element ={<ItemDetailContainer/>}/>
      <Route path='/item/:itemId' element ={<ItemDetailContainer/>}/>
      <Route path='*' element ={<h1>404 NOT FOUND</h1>}/>

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
