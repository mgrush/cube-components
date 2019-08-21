import React, { useEffect } from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { withTheme } from '../styled'

interface LayerProps {
  // 浮层是否可见，默认不可见
  visible?: boolean

  className?: string

  // 自定义尺寸，将以375为基数进行自适应，如：(200/375)vw
  width?: number
  height?: number

  // 是否背景透明
  transparent?: boolean
  
  // 显示与隐藏渲染完成之后执行的回调
  onShow?: (el: HTMLDivElement) => void
  onHide?: (el: HTMLDivElement) => void

  // 浮层显示或者隐藏的动画方向
  showType?: 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown'

  // 动画显示效果
  animationType?: string // TODO

  children?: React.ReactNode

  onClick?: (e: React.MouseEvent) => void
}

const Container = styled.div<LayerProps>`
  width: ${props => props.width ? `${props.width / 3.75}vw` : '100vw'};
  height: ${props => props.height ? `${props.height / 3.75}vh` : '100vh'};
  
  background-color: ${props => props.transparent ? 'transparent' : props.theme.layer.backgroundColor};
`

const Layer: React.FC<LayerProps> = React.memo(props => {
  const {
    onShow,
    onHide,
    children,
    className: classNameProp,
    ...restProps
  } = props

  const className: string = clsx('cui-layer', {
    [classNameProp]: classNameProp
  })

  // 关联容器引用，方便在onShow | onHide中传入进去
  const layerRef: React.RefObject<HTMLDivElement> = React.createRef()

  // 当浮层的可见性发生变化的时候，触发onShow | onHide事件回调
  useEffect(() => {
    if (props.visible && typeof onShow === 'function') {
      onShow(layerRef.current)
    }

    if (!props.visible && typeof onHide === 'function') {
      onHide(layerRef.current)
    }
  }, [props.visible])
  
  return (
    <Container {...restProps} ref={layerRef} className={className} />
  )
})

export default withTheme(Layer)
