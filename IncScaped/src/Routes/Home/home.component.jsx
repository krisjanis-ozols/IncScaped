import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HomeCmponent() {
      return (
       <div>
        <Outlet/>
        <h1>HOME</h1>
        </div>
      )
    }