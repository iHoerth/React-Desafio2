import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import {fetchPokemon} from './Helpers';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Router, Switch, Link } from 'react-router-dom';


const ItemDetailContainer = () => {
  const params = useParams();
  const [pokemon,setPokemon] = useState()
  const [loading,setLoading] = useState(true)
  
  useEffect(() => {
    const asyncFunction = async() => {
      const pokeList = await fetchPokemon(1,150);
      console.log(params);
      const filteredPoke = await pokeList.find(poke => poke.name === params.pokemon);
      setPokemon(await filteredPoke);
      setLoading(false);
    }
    asyncFunction();
  },[params.pokemon])

  if(loading){
    return (
      <div className='loadingContainer'>
        <h1 className='loading'>LOADING</h1>
      </div>
    )
  } 

  return (
    <div id="detailContainer">
      <h1>Item Detail Container</h1>
      <ItemDetail pokemon={pokemon} />
    </div>
  )
}

export default ItemDetailContainer