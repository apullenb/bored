import React from 'react'

function Games(props) {
    const random = Math.floor(Math.random() * props.games.length)
    console.log(random)
    return (
     <div className=''>
        <h3>{props.games[random].title} </h3>
          <iframe src={props.games[random].src} title={props.games[random].title} ></iframe> 
     </div>
  )
}

export default Games