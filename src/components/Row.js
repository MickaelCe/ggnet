import React, { useState, useEffect } from 'react';
import "../components-css/Row.css";

const Row = ({ title }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [randomMax, setRandomMax] = useState(0);
  const [randomMin, setRandomMin] = useState(0);

  useEffect (()=>{
    const getRandomMax = () =>{
      const randomMax = Math.floor(Math.random() * 10251);
      setRandomMax(randomMax)
    }
    getRandomMax()
  }, [])

  useEffect (()=>{
    const getRandomMin = () =>{
      const randomMin = randomMax - 15 ;
      setRandomMin(randomMin)
    }
    getRandomMin()
  }, [randomMax])
  
useEffect (()=>{
    const getGames = async () =>{
      const gameFromServer = await fetchGames()
      setGames(gameFromServer)
    }
  getGames()
  }, [])



// Fetch games
const fetchGames = async () => {
  const res = await fetch('https://gamergategg.herokuapp.com/api/games');
  const data = await res.json();
  setLoading(true);
    return data
}
  

  return (
    <div className='row'>
        <h2>{title}</h2>
      <div className='row__posters'>
        {loading ? (games.map(game => (game.id > randomMin && game.id < randomMax ? (<img src={game.img_url} alt={game.id} key={game.id} className='row__poster' />) : (''))))
          : (
            <div className='loading'>
              <div className='loadingSquare'><img src={require('../assets/loader.gif')} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={require('../assets/loader.gif')} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={require('../assets/loader.gif')} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={require('../assets/loader.gif')} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={require('../assets/loader.gif')} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={require('../assets/loader.gif')} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={require('../assets/loader.gif')} alt="loader" className='loader'/></div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Row