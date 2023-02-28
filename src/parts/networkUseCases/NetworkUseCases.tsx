import React from 'react'

import './networkUseCases.sass'

const imagesWithDescriptions = [
  {

  }
]

export default function NetworkUseCases() {
  return (
    <div id='network-use-cases-part'>
      <div className="header">
        <h1>Network use cases</h1>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum deserunt architecto quas dolor porro!</h4>
      </div>
    </div>
  )
}

interface imageProps {
  header: string,
  imageSrc: string,
  description: string,
  additionalList?: string[],
  benefits: string[]
}

function SingleArticle(props: imageProps) {
  return (
    <article>
      <h3>{props.header}</h3>
      <img src={props.imageSrc} />
      <p>{props.description}</p>
      {props.additionalList &&
        <ul>
          {
            props.additionalList.map(x => (
              <li>{x}</li>
            ))
          }
        </ul>
      }
      <ul>
        <h4>Benefits:</h4>
        {
          props.benefits.map(x => (
            <li>{x}</li>
          ))
        }
      </ul>
    </article>
  )
}