import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import Layer from 'Layer'
import Button from 'Button'

const Title = styled.div`
  font-size: 1.4rem;
  color: #333333;
  text-align: left;
  padding: 0 1.2rem;
  line-height: 3.2rem;
  background-color: #F6F6F6;
`

const Container = styled.div`
  padding: 1.2rem;

  .cui-button {
    margin: 0.5rem 0.5rem 0.5rem 0;
  }

  .cui-layer-container {
    min-width: 20rem;
    min-height: 20rem;
  }
`

const Section: React.FC<{
  title: string
  children: React.ReactNode
}> = React.memo(props => {
  return (
    <Fragment>
      <Title>{props.title}</Title>
      <Container>{props.children}</Container>
    </Fragment>
  )
})

export default () => {
  const [positionLeft, setPositionLeft] = useState(false)
  const [positionRight, setPositionRight] = useState(false)
  const [positionTop, setPositionTop] = useState(false)
  const [positionBottom, setPositionBottom] = useState(false)
  const [showCallback, setShowCallback] = useState(false)

  return (
    <React.Fragment>
      <Section title={`设置不同的出场方式：${positionLeft}`}>
        <Button 
          inline 
          onClick={() => { 
            setPositionLeft(true) 
          }}>Slide from screen Left</Button>

        <Layer 
          position='left' 
          visible={positionLeft} 
          onClick={() => { 
            setPositionLeft(false) 
          }}>Slide from screen Left</Layer>

        <Button 
          inline 
          onClick={() => {
            setPositionRight(true)
          }}>Slide from screen Right</Button>

        <Layer 
          position='right' 
          visible={positionRight} 
          onClick={() => { 
            setPositionRight(false) 
          }}>Slide from screen Right</Layer>

        <Button 
          inline 
          onClick={() => {
            setPositionTop(true)
          }}>Slide from screen Top</Button>

        <Layer 
          position='top' 
          visible={positionTop} 
          onClick={() => { 
            setPositionTop(false) 
          }}>Slide from screen Top</Layer>

        <Button 
          inline 
          onClick={() => {
            setPositionBottom(true)
          }}>Slide from screen Bottom</Button>

        <Layer 
          position='bottom' 
          visible={positionBottom} 
          onClick={() => { 
            setPositionBottom(false) 
          }}>Slide from screen Bottom</Layer>
      </Section>

      <Section title='设置出场动画（暂未实现）：'>
        
      </Section>

      <Section title='点击时隐藏Layer并触发onShow、onHide回调：'>
        <Button 
          inline
          onClick={() => {
            setShowCallback(true)
          }}>onShow / onHide callback</Button>

        <Layer
          visible={showCallback}
          onClick={() => {
            setShowCallback(false)
          }}
          onShow={() => {
            console.log('触发了onShow事件回调！')
          }}
          onHide={() => {
            console.log('触发了onHide事件回调！')
          }}>点击时隐藏Layer并触发onShow、onHide回调</Layer>
      </Section>
    </React.Fragment>
  )
}
