import React from 'react'
import ComentComponent from '../coment/coment.component'

export default function ComentListComponent({comments}) {
  return (

    <div>
      <h2>COMENTS:</h2>
        {comments.map((coment, index) => (
          <ComentComponent key={index} coment={coment} />
        ))}
    </div>
  )
}
