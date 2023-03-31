import React from 'react';
import styled from 'styled-components';

function Games(props) {
  const random = Math.floor(Math.random() * props.games.length)
  return (
    <Game className='box-1 box p-4'>
        <h3 className='pb-3'>{props.games[random].title} </h3>
        <p>{props.games[random].description}</p>
        <iframe src={props.games[random].src} title={props.games[random].title} height='460px'></iframe>
    </Game>
  )
}

export default Games;

const Game = styled.div`
width: 45vw;
min-width: 285px;

@media screen and (max-width: 1145px) {
  width: 50vw
}

@media screen and (max-width: 904px) {
  width: 75vw
}

@media screen and (max-width: 745px) {
  width: 85vw
}
`