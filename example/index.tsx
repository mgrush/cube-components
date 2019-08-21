import React from 'react'
import ReactDom from 'react-dom'
import IconDemo from './Icon'

function renderComponent(){
  ReactDom.render(
    <IconDemo />,
    document.getElementById('root')
  )
}

renderComponent()

if (module.hot) {
  module.hot.accept(() => {
    renderComponent()
  })
}
