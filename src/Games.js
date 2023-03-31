import React from 'react';
import styled from 'styled-components';

function Games(props) {
  const random = Math.floor(Math.random() * props.games.length)
  return (
    <Game className='box p-4'>
        <h3 className='pb-3'>{props.games[random].title} </h3>
        <p>{props.games[random].description}</p>
        <iframe src={props.games[random].src} title={props.games[random].title} height='450px'></iframe>
    </Game>
  )
}

export default Games;

const Game = styled.div`
width: 35vw;
min-width: 275px;

@media screen and (max-width: 904px) {
  width: 75vw
}
`