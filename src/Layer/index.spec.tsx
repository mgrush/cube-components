import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { run, getContainerType } from 'jestSetup'

import Layer from '.'

run('Component: Layer', (getContainer: getContainerType) => {
  it('renders with different showType !', () => {
    let container = getContainer()

    act(() => { 
      render(<Layer />, container) 
      render(<Layer showType='slideLeft' />, container) 
      render(<Layer showType='slideRight' />, container) 
      render(<Layer showType='slideUp' />, container) 
      render(<Layer showType='slideDown' />, container) 
    })
  })

  it('renders with transparent layer !', () => {
    let container = getContainer()

    act(() => { 
      render(<Layer />, container) 
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

  it('renders with custom size !', () => {
    let container = getContainer()

    act(() => { 
      render(<Layer width={240} height={300} />, container) 
    })
  })

  it('renders with hooks !', () => {
    let onShow = jest.fn()
    let onHide = jest.fn()
    let container = getContainer()

    act(() => { 
      render(<Layer closable onShow={onShow} onHide={onHide} />, container) 
    })

    let layerElement = container.firstChild
    
    act(() => {
      layerElement.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    expect(onShow).toHaveBeenCalledTimes(1)
    expect(onHide).toHaveBeenCalledTimes(1)
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
