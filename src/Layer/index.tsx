import clsx from 'clsx'
import React from 'react'
import styled from 'styled-components'

import { withTheme } from '../styled'
import { isFunction } from '../util'
import { Transition } from 'react-transition-group'
import { LayerProps, ContainerProps, MaskLayerProps } from './index.props'

const MaskLayer = styled.div<MaskLayerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => props.visible ? '100vw' : 0};
  height: ${props => props.visible ? '100vh' : 0};
  transition: opacity ${props => props.animateDuration / 1000}s;
  opacity: ${props => ['entering', 'entered'].includes(props.animateState) ? 1 : 0};
  background-color: ${props => props.theme.layer.maskLayerBgColor};
`

const Container = styled.div<ContainerProps>`
  position: fixed;
  transition: ${props => props.animateDuration / 1000}s;
  background-color: ${props => props.theme.layer.contentBgColor};

  &.posi-center {
    left: 50vw;
    top: calc(50vh + ${props => props.theme.layer.verticalOffset});
    transform: translate3D(-50%, -50%, 0) scale(${props => ['entering', 'entered'].includes(props.animateState) ? 1 : 0});
  }

  &.posi-left, &.posi-right {
    top: 0;
    height: 100vh;
    max-width: ${props => props.theme.layer.maxWidth};
  }

  &.posi-top, &.posi-bottom {
    left: 0;
    width: 100vw;
    max-height: ${props => props.theme.layer.maxHeight};
  }

  &.posi-left {
    left: 0;
    border-radius: ${props => `0 ${props.borderRadius}rem ${props.borderRadius}rem 0`};
    transform: translateX(${props => ['entering', 'entered'].includes(props.animateState) ? 0 : '-100%'});
  }

  &.posi-right {
    right: 0;
    border-radius: ${props => `${props.borderRadius}rem 0 0 ${props.borderRadius}rem`};
    transform: translateX(${props => ['entering', 'entered'].includes(props.animateState) ? 0 : '100%'});
  }

  &.posi-top {
    top: 0;
    border-radius: ${props => `0 0 ${props.borderRadius}rem ${props.borderRadius}rem`};
    transform: translateY(${props => ['entering', 'entered'].includes(props.animateState) ? 0 : '-100%'});
  }

  &.posi-bottom {
    bottom: 0;
    border-radius: ${props => `${props.borderRadius}rem ${props.borderRadius}rem 0 0`};
    transform: translateY(${props => ['entering', 'entered'].includes(props.animateState) ? 0 : '100%'});
  }
`

const Layer: React.FC<LayerProps> = React.memo(({
  visible,
  className,
  position,
  onShow,
  onHide,
  children,
  theme,
  onClick,
  borderRadius = 0,
  animateDuration = 300
}) => {
  const contentRef: React.RefObject<HTMLDivElement> = React.createRef()

  const maskLayerProps = {
    visible,
    theme,
    animateDuration,
    onClick: (event: React.MouseEvent) => isFunction(onClick) && onClick(event)
  }

  const transitionProps = {
    in: visible,
    timeout: animateDuration,
    onEntered: () => isFunction(onShow) && onShow(contentRef.current),
    onExited: () => isFunction(onHide) && onHide(contentRef.current)
  }

  const containerProps = {
    visible,
    className: clsx('cui-layer-container', {
      className,
      [`posi-center`]: !position,
      [`posi-${position}`]: position,
    }),
    theme,
    children,
    borderRadius,
    animateDuration
  }

  return (
    <Transition {...transitionProps}>
      {animateState => (
        <React.Fragment>
          <MaskLayer {...maskLayerProps} animateState={animateState} />
          <Container {...containerProps} animateState={animateState} />
        </React.Fragment>
      )}
    </Transition>
  )
})

export default withTheme(Layer)
