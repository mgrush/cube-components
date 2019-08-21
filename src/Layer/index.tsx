import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { withTheme } from '../styled'

interface LayerProps {
  className?: string

  // 自定义尺寸，将以375为基数进行自适应，如：(200/375)vw
  width?: number
  height?: number

  // 是否背景透明
  transparent?: boolean
  
  // 是否点击时自动隐藏
  closable?: boolean
  
  // 显示与隐藏渲染完成之后执行的回调
  onShow?: (el: HTMLElement) => void
  onHide?: (el: HTMLElement) => void

  // 浮层显示或者隐藏的动画方向
  showType?: 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown'

  // 动画显示效果
  animationType?: string // TODO

  children?: React.ReactNode

  onClick?: (e: React.MouseEvent) => void
}

const Container = styled.div`

`

const Layer: React.FC<LayerProps> = React.memo(props => {
  return (
    <Container {...props} />   
  )
})

export default withTheme(Layer)
