import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'
import { withTheme } from '../styled'

interface ButtonProps {
  type?: 'primary' | 'succ' | 'warning' | 'danger';
  size?: 'small' | 'medium' | 'large';
  variant?: 'plain' | 'contain' | 'outline';
  round?: boolean;
  inline?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: string | object;
  iconPosition?: 'left' | 'right';
  theme?: object;
  children?: React.ReactNode; 
  onClick?: (event: React.MouseEvent) => void;
}

const Container = styled.div<ButtonProps>`
  font-weight: 400;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  display: ${props => props.inline ? 'inline-' : ''}flex;
  height: ${props => props.theme.button[`${props.size}Height`]};
  padding: 0 ${props => props.theme.button[`${props.size}PaddingH`]};

  font-size: ${props => props.theme.button[`${props.size}FontSize`]}
  color: ${props => props.theme.button[props.variant][`${props.type}FontColor`]};
  
  border: ${props => props.variant === 'outline' ? props.theme.button[props.variant][`${props.type}BorderStyle`] : 'none'};
  border-radius: ${props => props.round ? `${(parseFloat(props.theme.button[`${props.size}Height`]) / 2)}rem` : props.theme.button[`${props.size}BDRadius`]};
  background-color: ${props => props.theme.button[props.variant][`${props.type}BGColor`]};
  background-image: ${props => props.theme.button[props.variant][`${props.type}BGImage`] || 'none'}; /* 支持设置渐变背景色 */

  &.disabled {
    color: ${props => props.theme.button[props.variant].disabledFontColor};
    border: ${props => props.theme.button[props.variant].disabledBorderStyle};
    background-color: ${props => props.theme.button[props.variant].disabledBGColor};
  }

  &:not(.disabled):active {
    opacity: ${props => props.theme.button.activeOpacity};
  }
`

const Button: React.SFC<ButtonProps> = React.memo(props => {
  const className = clsx('cui-button', {
    disabled: props.disabled,
    [props.className]: props.className
  })

  return (
    <Container {...props} className={className} >
      {props.children}
    </Container>
  )
})

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  variant: 'contain',
  iconPosition: 'left'
}

export default withTheme(Button)
