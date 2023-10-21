import React from 'react'
import { Outlet } from 'react-router-dom'
import StoriesListComponent from '../../components/stories-list/stories-list.component'

export default function HomeCmponent() {
      return (
       <>
          <Outlet/>
          <StoriesListComponent/>            
        </>
      )
    }