import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
import Pagination from './Pagination';
import Counter from './Counter';
import Jokes from './Jokes';

function App() {
  
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [sum, setSum] = useState()
  const [page, setPage] = useState(0)
  const [joke, setJoke] = useState()
  const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Any';


  useEffect(() => {
    setLoading(true)
    let cancel 
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
      setSum(res.data.count)
      console.log(sum)
  })
    axios.get(JOKE_API_URL)
      .then(res => {
        setJoke(res.data.setup)
      })  
  


  return () => cancel()

},[currentPageUrl])

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
    setPage(page+1)
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
    setPage(page-1)
  }
  
  if (loading) return "loading"

  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination 
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
      <Counter sum={sum} />
      <div>Page: {page}</div>
      <Jokes joke={joke}/>
    </>
  );
} 
 
export default App;
