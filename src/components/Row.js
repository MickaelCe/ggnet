import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../components-css/Row.css";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import loader from '../assets/loader.gif';

const Row = ({ title }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [randomMax, setRandomMax] = useState(0);
  const [randomMin, setRandomMin] = useState(0);





  useEffect (()=>{
    const getRandomMax = () =>{
      const randomMax = Math.floor(Math.random() * 1000);
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
        <AiOutlineRight className='arrow__right' size={64}/>
        <AiOutlineLeft className='arrow__left' size={64}/>
        {loading ? (games.map(game => (game.id > randomMin && game.id < randomMax ? (
          <Link to={`/game/${game.names}`} className='row__poster__link' key={game.id}><img src={game.img_url} alt={game.id} key={game.id} className='row__poster__image'/></Link>
        ) : (''))))
          : (
            <div className='loading'>
              <div className='loadingSquare'><img src={loader} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={loader} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={loader} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={loader} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={loader} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={loader} alt="loader" className='loader'/></div>
              <div className='loadingSquare'><img src={loader} alt="loader" className='loader'/></div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Row