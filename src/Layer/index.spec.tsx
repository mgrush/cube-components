import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { run, getContainerType } from 'jestSetup'

import Layer from '.'

run('Component: Layer', (getContainer: getContainerType) => {
  it('renders with different showFrom !', () => {
    let container = getContainer()

    act(() => { 
      render(<Layer />, container) 
      render(<Layer showFrom='left' />, container) 
      render(<Layer showFrom='right' />, container) 
      render(<Layer showFrom='bottom' />, container) 
      render(<Layer showFrom='top' />, container) 
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
      render(<Layer onHide={onHide} />, container) 
    })

    expect(onHide).toHaveBeenCalledTimes(1)

    act(() => { 
      render(<Layer visible onShow={onShow} />, container) 
    })

    expect(onShow).toHaveBeenCalledTimes(1)
  })

  it('renders with different animationType !', () => {
    let container = getContainer()

    // 尚未考虑清楚如何设计动画类型
    // https://cssanimation.rocks/ui-animation-react/
    // https://reactjsexample.com/tag/animation/
    act(() => { 
      render(<Layer animationType='' />, container) 
    })
  })

  it('renders with custom children !', () => {
    let container = getContainer()
    
    act(() => {
      render(<Layer>我是自定义内容</Layer>, container)
    })
  })
})
