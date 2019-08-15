import React from 'react'
import ReactDom from 'react-dom'

import ButtonDemo from '../src/Button/Button.demo'

function renderComponent(){
  ReactDom.render(
    <ButtonDemo />,
    document.getElementById('root')
  )
}

renderComponent()

if (module.hot) {
  module.hot.accept(() => {
    renderComponent()
  })
}
