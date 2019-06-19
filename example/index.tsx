import React from 'react'
import ReactDom from 'react-dom'

import Button from '../src/Button'

function renderComponent(){
  ReactDom.render(
    <Button text='This is Button' onClick={() => {alert(232)}} />,
    document.getElementById('root')
  )
}

renderComponent()

if (module.hot) {
  module.hot.accept(() => {
    renderComponent()
  })
}
