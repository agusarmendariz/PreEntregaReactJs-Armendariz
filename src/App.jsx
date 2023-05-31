import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path={'/'} element ={<ItemListContainer/>}/>
      <Route path={'/categoria/:id'} element ={<ItemDetailContainer/>}/>
      <Route path={'/item/:itemId'} element ={<ItemDetailContainer/>}/>
      <Route path={'*'}element ={<Error404/>}/>
      </Routes>
      

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
