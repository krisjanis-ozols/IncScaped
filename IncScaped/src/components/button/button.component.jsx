import React from 'react'
import './button.styles.scss'
const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}
export default function Button({children,buttonType,...otehrProps}) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otehrProps}>
        {children}
    </button>
  )
}

