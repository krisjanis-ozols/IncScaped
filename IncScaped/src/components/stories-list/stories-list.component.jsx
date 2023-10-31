import React from 'react'
import StorieComponent from '../storie/storie.component'
import { useContext } from 'react'
import { StorieContext } from '../../context/storie.context'
import './stories-list.styles.scss'
import { useEffect } from 'react'
import axiosClient from '../../axios'

export default function StoriesListComponent() {  
  const {stories, setStorie} = useContext(StorieContext);
  useEffect(() => {
    const fetchData = async () => {
        axiosClient.get('/storyAll')
        .then(({data})=>{
          setStorie(data.data)
        })
        .catch((error)=>{
            console.log(error);
        }); 
    };
    fetchData();
  }, []);
  return (
    <div className='stories-container'>
        {stories.map((storie, index) => (
          <StorieComponent key={index} storie={storie} />
        ))}
    </div>
  )
}
