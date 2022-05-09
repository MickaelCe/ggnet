import React, { useEffect, useState } from 'react'
import "../../components-css/GameDetails.css";

function GameDetails() {

  const [searchGame, setSearchGame] = useState(window.location.pathname.replace("/game/", ''));
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGames = async () => {
        const gameFromServer = await fetchGame()
        setGames(gameFromServer)
    }
    getGames()
}, [])

  const fetchGame = async () => {
    const res = await fetch('https://gamergategg.herokuapp.com/api/games');
    const data = await res.json();
    setLoading(true);
      return data
  }
  
  return (
      <div className='game___container'>
          {loading ? (games.map(game => (game.id == searchGame ? (
                  <div key={game.id} className='game__image'>
                      <img src={game.img_url} alt={game.id} key={game.id}  />
                      <h1 className='game__name'>{game.names}</h1>
                      <p className='game__description'>{game.user_reviews}<span>By : {game.developer}</span></p>
                  </div>
              ) : ('')))) 
                : (<div className='game__container'>
                <div className='loading__game'><img src={require('../../assets/loader.gif')} alt="loader" className='loader'/></div>
              </div>)
            }   
      </div>
  )
}

export default GameDetails