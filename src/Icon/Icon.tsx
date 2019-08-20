import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { withTheme } from '../styled'

interface IconProps {
  /* 当前支持的svg内置图标名称 */
  name?: string

  /* 显示的尺寸大小，可以通过className样式类做更加灵活的控制 */
  size?: 'small' | 'medium' | 'large'

  /* 图标显示的颜色，只针对svg图标有效 */
  color?: string

  /* 自定义样式设置，只影响容器的显示 */
  className?: string

  /* 满足传入外部资源文件的场景 */
  url?: string

  /* 支持的动画效果，给图标添加动画/变换效果 */
  animationType?: 'rotate'

  /* 图标的可点击响应区域，默认与图标容器尺寸相同，点击区域不影响布局流 */
  reactRatio?: number

  /* 图标可响应用户点击事件的情况下，被点击时的透明度*/
  activeOpacity?: number

  onClick?: (event: React.MouseEvent) => void
}

const Container = styled.span<IconProps>`
  display: inline-block;
  position: relative;
  width: ${props => props.theme.icon[`${props.size}Width`]};
  height: ${props => props.theme.icon[`${props.size}Height`]};

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  /* 优先使用name指定的svg图标，因为性能上更优 */
  background-image: ${props => props.url && !props.name ? `url(${props.url})` : 'none'};

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: ${props => `${props.reactRatio * 100}%`};
    height: ${props => `${props.reactRatio * 100}%`};
  }
  
  &:active {
    opacity: ${props => props.activeOpacity && typeof props.onClick === 'function' ? props.activeOpacity : 1};
  }

  svg {
    fill: ${props => props.color};
  }
`

const Icon: React.SFC<IconProps> = React.memo(props => {
  const customProps = {
    ...props,
    className: clsx('cui-icon', { 
      [props.className]: props.className 
    }),
    dangerouslySetInnerHTML: {
      __html: props.name ? require(`./svg-icon/${props.name}.svg`) : ''
    }
  }
  
  return <Container {...customProps} />
})

Icon.defaultProps = {
  size: 'medium',
  reactRatio: 1.0,
  activeOpacity: 0.6
}

export default withTheme(Icon)
