import React from 'react'
import styled from 'styled-components'
import Button from 'Button'

const Container = styled.div`
  & > .cui-button {
    margin: 10px;
  }
`

const ButtonDemo = React.memo(props => {
  return (
    <Container>
      <Button type='primary'>Primary</Button>
      <Button type='succ'>Succ</Button>
      <Button type='warning'>Warning</Button>
      <Button type='danger'>Danger</Button>

      <Button inline size='small'>Small</Button>
      <Button inline size='medium'>Medium</Button>
      <Button inline size='large'>Large</Button>

      <Button round inline size='small'>Small</Button>
      <Button round inline size='medium'>Medium</Button>
      <Button round inline size='large'>Large</Button>

      <Button inline variant='plain'>Plain</Button>
      <Button inline variant='contain'>Contain</Button>
      <Button inline variant='outline'>Outline</Button>

      <Button disabled inline variant='plain'>Plain</Button>
      <Button disabled inline variant='contain'>Contain</Button>
      <Button disabled inline variant='outline'>Outline</Button>

    </Container>
  )
})

export default ButtonDemo
