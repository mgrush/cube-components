import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { run, getContainerType } from 'jestSetup'

import Layer from '.'

run('Component: Layer', (getContainer: getContainerType) => {
  it('renders with different position !', () => {
    let container = getContainer()

    act(() => { 
      render(<Layer />, container) 
      render(<Layer position='left' />, container) 
      render(<Layer position='right' />, container) 
      render(<Layer position='bottom' />, container) 
      render(<Layer position='top' />, container) 
    })
  })

  it('renders with onClick event handler !', () => {
    let onClick = jest.fn()
    let container = getContainer()

    act(() => { 
      render(<Layer onClick={onClick} />, container) 
    })

    let layerElement = container.firstChild

    act(() => { 
      layerElement.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders with hooks !', () => {
    let onShow = jest.fn()
    let onHide = jest.fn()
    let container = getContainer()

    act(() => { 
      render(<Layer visible onShow={onShow} onHide={onHide} />, container) 
    })

    let maskLayer = container.firstChild

    act(() => { 
      maskLayer.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    setTimeout(() => {
      expect(onHide).toHaveBeenCalledTimes(1)
      expect(onShow).toHaveBeenCalledTimes(1)
    }, 300)
  })

  it('renders with custom children !', () => {
    let container = getContainer()
    
    act(() => {
      render(<Layer>我是自定义内容</Layer>, container)
    })
  })
})
