import React from 'react'

function Activity(props) {
  return (
    <div style={boxStyle}>
    <div>{props.act.activity}</div>
    <a href={props.act.link} style={boxStyle}>Click here for more info</a>
    </div>
  )
}
const boxStyle = {
    backgroundColor: 'coral',
    fontSize: '17px',
    fontColor: 'black'
}
export default Activity