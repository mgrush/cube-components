import React from 'react'
import Icon from 'Icon'

import { act } from 'react-dom/test-utils'
import { render } from 'react-dom'
import { run, getContainerType } from './jestSetup'

run('Component: Icon', (getContainer: getContainerType) => {
  it('renders with svg name for different size !', () => {
    let container = getContainer()

    act(() => { render(<Icon name='account-login' size='small' />, container) })
    act(() => { render(<Icon name='account-login' size='medium' />, container) })
    act(() => { render(<Icon name='account-login' size='large' />, container) })
  })

  it('renders with color for svg icon type !', () => {
    let container = getContainer()

    act(() => { render(<Icon name='account-login' color='gray' />, container) })
    act(() => { render(<Icon name='account-login' color='#333333' />, container) })
    act(() => { render(<Icon name='account-login' color='rgba(0, 0, 0, .6)' />, container) })
  })

  it('renders with custom url for different size !', () => {
    let container = getContainer()

    act(() => { render(<Icon url='https://api.travis-ci.com/mgrush/cube-components.svg?branch=master' />, container) })
  })

  it('renders with click event handler !', () => {
    let onClick = jest.fn()
    let container = getContainer()

    act(() => { render(<Icon name='account-login' onClick={onClick} />, container) })

    let iconElement = container.firstChild

    act(() => { iconElement.dispatchEvent(new MouseEvent('click', { bubbles: true })) })
  
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders with animationType props !', () => {
    // 功能尚未实现 
  })
})
