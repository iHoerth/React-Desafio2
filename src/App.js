// import {useEffect, useState} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contacto from './components/Contacto';
import PokeItems from './components/PokeItems';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/pokemons/' element={<ItemListContainer />}/>
          {/* <Route path='/pokemons/:type' element={<ItemListContainer />}/> */}
          <Route path='/pokemons/pokemondetail/' element={<ItemDetailContainer />}/>
          <Route path='/pokemons/pokemondetail/:pokemon' element={<ItemDetailContainer />}/>
          <Route path='/pokeitems' element={<PokeItems />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='*' element={<ItemListContainer />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
