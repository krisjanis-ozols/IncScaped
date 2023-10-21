import React from 'react'
import StorieComponent from '../storie/storie.component'
import { useContext } from 'react'
import { StorieContext } from '../../context/storie.context'
import './stories-list.styles.scss'

export default function StoriesListComponent() {  
  const {stories} = useContext(StorieContext);
  return (
    <div className='stories-container'>
        {stories.map((storie, index) => (
          <StorieComponent key={index} storie={storie} />
        ))}
    </div>
  )
}
