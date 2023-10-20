import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminHomeCmponent() {
      return (
        // TODO adminam jāvar pievienot ideja
       <div>
          <Outlet/>
          <h1>ADMIN HOME</h1>
        </div>
      )
    }