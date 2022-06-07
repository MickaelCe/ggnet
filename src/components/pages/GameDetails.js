import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube';
import { useNavigate } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io';
import "../../components-css/GameDetails.css";

function GameDetails() {

  const [searchGame] = useState(window.location.pathname.replace("/game/", ''));
  const [games, setGames] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const opts = {
    height:"90%",
    width:"100%",
    playerVars: {
      autoplay: 1,
      playlist: trailerUrl,
      loop: 1,
      showinfo: 0,
      controls: 0,
    },
  };

  const navigate = useNavigate();


  useEffect(() => {
    const getGames = async () => {
        const gameFromServer = await fetchGame()
      setGames(gameFromServer)
    }
    const getUrl = async () => {
      const UrlFromApi = await fetchTrailer()
      setTrailerUrl(UrlFromApi.items[0].id.videoId)
    }
    getGames()
    getUrl()
  }, [])


  
  const fetchGame = async () => {
    const res = await fetch('https://gamergategg.herokuapp.com/api/games');
    const data = await res.json();
    setLoading(true);
      return data
  }

  const fetchTrailer = async () => {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAphdW-OnkGD0YAx4-3gRAq8ae8EIJQwuA&type=video&q=${searchGame}+trailer`);
    const dataUrl = await res.json();
    return dataUrl
  }
  
  return (
      <div className='game___container'>
          {loading ? (games.map(game => (game.names.replace(/(%C2%AE|%20)/g, ' ').replace(/ /g, '').toLowerCase().trim() === searchGame.replace(/(%C2%AE|%20)/g, ' ').replace(/ /g, '').toLowerCase().trim() ? (
            <div key={game.id} className='game__image' style={{ backgroundImage: `url(${game.img_url}` }}>
              <div className='game___container__infos'>
                <h1>{game.names}</h1>
                <div className='infos'>
                  <p >{game.user_reviews}</p>
                  <p >By : {game.developer}</p>
                  <a href={game.link} target='blank_' className='header__buttons'>Buy now</a>
                </div>
                  <Youtube className='trailer' videoId={trailerUrl}
                    opts={opts}
                />
                  <div className='filter___details'>
                </div>
                <IoMdArrowRoundBack className='back__button' size={50} onClick={() => {
                  navigate(-1)
                } }/>
              </div>
              </div>
              ) : ('')))) 
                : (<div className='game__container__load'>
                <div className='loading__game'><img src={require('../../assets/loader.gif')} alt="loader" className='loader'/></div>
              </div>)
            }   
      </div>
  )
}

export default GameDetails