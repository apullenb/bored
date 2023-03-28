import React from 'react'

function Games(props) {
    const random = Math.floor(Math.random() * props.games.length)
    console.log(random)
    return (
     <div>
        <h2>{props.games[random].title} </h2>
          <iframe src={props.games[random].src} title={props.games[random].title} width='100%'height={'500vh'} ></iframe> 
     </div>
  )
}

export default Games