import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { withTheme } from '../styled'

interface LayerProps {
  // 浮层是否可见，默认不可见
  visible?: boolean

  className?: string

  // 浮层显示或者隐藏的动画方向
  showFrom?: 'left' | 'right' | 'top' | 'bottom'

  // 动画显示效果
  animationType?: string // TODO

  children?: React.ReactNode

  // 显示与隐藏渲染完成之后执行的回调
  onShow?: (el: HTMLDivElement) => void
  onHide?: (el: HTMLDivElement) => void

  onClick?: (e: React.MouseEvent) => void
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`

const Layer: React.FC<LayerProps> = React.memo(props => {
  const className: string = clsx('cui-layer', {
    [props.className]: props.className,
    [`from-${props.showFrom}`]: props.showFrom
  })

  // 关联容器引用，方便在onShow | onHide中传入进去
  const layerRef: React.RefObject<HTMLDivElement> = React.createRef()

  // 当浮层的可见性发生变化的时候，触发onShow | onHide事件回调
  useEffect(() => {
    if (props.visible && typeof props.onShow === 'function') {
      props.onShow(layerRef.current)
    }

    if (!props.visible && typeof props.onHide === 'function') {
      props.onHide(layerRef.current)
    }
  }, [props.visible])
  
  return (
    <Container {...props} ref={layerRef} className={className} />
  )
})

export default withTheme(Layer)
