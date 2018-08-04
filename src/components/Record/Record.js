import React from 'react'

const record = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.artist}</p>
      <p>{props.year}</p>
      <p>{props.credits}</p>
      <a href={props.link}><img src={props.cover}/></a>
      
    </div>
  )
}

export default record
