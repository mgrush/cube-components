import React from 'react'
import { act } from 'react-dom/test-utils'
import { render } from 'react-dom'
import { run, getContainerType } from 'jestSetup'

import Button from './'

run('Component: Button', (getContainer: getContainerType) => {
  it('renders with different type !', () => {
    let container = getContainer()

    act(() => { render(<Button type='primary'>Primary</Button>, container) })
    act(() => { render(<Button type='succ'>Succ</Button>, container) })
    act(() => { render(<Button type='warning'>Warning</Button>, container) })
    act(() => { render(<Button type='danger'>Danger</Button>, container) })
  })

  it('renders with different variant !', () => {
    let container = getContainer()
    
    act(() => { render(<Button variant='plain'>Plain</Button>, container) })
    act(() => { render(<Button variant='contain'>Contain</Button>, container) })
    act(() => { render(<Button variant='outline'>Outline</Button>, container) })
  })

  it('renders with different size !', () => {
    let container = getContainer()
    
    act(() => { render(<Button size='small'>Small</Button>, container) })
    act(() => { render(<Button size='medium'>Medium</Button>, container) })
    act(() => { render(<Button size='large'>Large</Button>, container) })
  })

  it('renders with inline、round、disabled !', () => {
    let container = getContainer()
    
    act(() => { render(<Button inline>Small</Button>, container) })
    act(() => { render(<Button round>Small</Button>, container) })
    act(() => { render(<Button disabled>Small</Button>, container) })
  })

  it('renders with onClick event handler !', () => {
    let onClick = jest.fn()
    let container = getContainer()

    act(() => { render(<Button type='primary' onClick={onClick}>Primary</Button>, container) })

    let button = container.firstChild
    
    act(() => { button.dispatchEvent(new MouseEvent('click', { bubbles: true })) })

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders with icon and iconPosition !', () => {
    // 尚未实现
  })
})
