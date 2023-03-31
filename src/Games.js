import React from 'react';
import styled from 'styled-components';

function Games(props) {
    const random = Math.floor(Math.random() * props.games.length)
    console.log(random)
    return (
     <Game>
        <h3>{props.games[random].title} </h3>
          <iframe src={props.games[random].src} title={props.games[random].title} ></iframe> 
     </Game>
  )
}

export default Games;

const Game = styled.div`
min-width: 65%;

`