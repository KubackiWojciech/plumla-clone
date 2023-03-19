import React from 'react'

import SkipperImg from '../../../static/Skipper.webp';
import RicoImg from '../../../static/Rico.webp';
import KowalskiImg from '../../../static/Kowalski.webp';
import PrivateImg from '../../../static/Private.webp';

import './networkUseCases.sass'

interface imageProps {
  header: string,
  imageSrc: any,
  description: any,
  additionalList?: string[],
  benefits: string[]
}

const imagesWithDescriptions: imageProps[] = [
  {
    header: 'Load Balancing',
    imageSrc: SkipperImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever',
    additionalList: [
      'first element',
      'second element'
    ],
    benefits: [
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of'
    ]
  },
  {
    header: 'Load Balancing',
    imageSrc: RicoImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever',
    benefits: [
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of'
    ]
  },
  {
    header: 'Load Balancing',
    imageSrc: KowalskiImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever',
    benefits: [
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of'
    ]
  },
  {
    header: 'Load Balancing',
    imageSrc: PrivateImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever',
    benefits: [
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of'
    ]
  },
  {
    header: 'Load Balancing',
    imageSrc: PrivateImg,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever',
    benefits: [
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of',
      'Lorem Ipsum is simply dummy text of'
    ]
  }
]

export default function NetworkUseCases() {
  return (
    <div className='main-part' id='network-use-cases-part'>
      <h1>Network use cases</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum deserunt architecto quas dolor porro!</h4>
      <div id="network-use-cases-examples">
        {
          imagesWithDescriptions.map(x =>
            <SingleArticle {...x} />
          )
        }
      </div>
    </div>
  )
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