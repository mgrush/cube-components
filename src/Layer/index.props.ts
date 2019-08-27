import { DefaultTheme } from 'styled-components'

/**
 * Layer组件接收的属性
 **/
export interface LayerProps {
  // 浮层是否可见，默认不可见
  visible?: boolean

  className?: string

  // 内容区域显示的位置
  position?: 'top' | 'right' | 'bottom' | 'left'

  // 内容区域显示的圆角大小
  borderRadius?: number

  // 动画持续时长
  animateDuration?: number

  theme?: DefaultTheme

  children?: React.ReactNode

  // 显示与隐藏渲染完成之后执行的回调
  onShow?: (el: HTMLDivElement) => void
  onHide?: (el: HTMLDivElement) => void

  onClick?: (e: React.MouseEvent) => void
}

/**
 * 蒙版属性
 **/
export interface MaskLayerProps {
  // 浮层是否可见，默认不可见
  visible?: boolean
  
  // 动画持续时长
  animateDuration?: number

  // 动画执行的状态
  animateState: string

  theme: DefaultTheme

  onClick?: (e: React.MouseEvent) => void
}

/**
 * 内容区域属性
 **/
export interface ContainerProps {
  // 浮层是否可见，默认不可见
  visible?: boolean

  className?: string

  // 内容区域显示的圆角大小
  borderRadius?: number

  // 动画持续时长
  animateDuration?: number

  // 动画执行的状态
  animateState: string

  theme: DefaultTheme

  children?: React.ReactNode
}
