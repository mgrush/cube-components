import React from 'react'
import ReactDom from 'react-dom'

import Button from '../src/components/Button'
import themeProps from '../src/common/styled'

function renderComponent(){
  ReactDom.render(
    <Button color='primary' theme={themeProps} >This is Button</Button>,
    document.getElementById('root')
  )
}

renderComponent()

if (module.hot) {
  module.hot.accept(() => {
    renderComponent()
  })
}
