import React from 'react'

function Games(props) {
    const random = Math.random() * props.games.length
    console.log(random, Math.round(random))
    return (
     <div>
         {/* <iframe src={props.games[random].src} title="Be a big fish in a small pond." width='100%'height={'500vh'} ></iframe> */}
     </div>
  )
}

export default Games