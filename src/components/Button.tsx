import React from 'react'
import clsx from 'clsx'
import styled from 'styled-components'

export interface ButtonProps {
  variant?: 'text' | 'contain' | 'outline',
  color?: 'primary' | 'success' | 'warning' | 'danger',
  size?: 'small' | 'medium' | 'large',
  round?: boolean,
  disabled?: boolean,
  className?: string,
  theme: object,
  children?: React.ReactNode,
  onClick?: (event: React.MouseEvent) => void
}

const Container = styled.div<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  height: ${props => props.theme.button[`${props.size}Height`]};
  padding: 0 ${props => props.theme.button[`${props.size}PaddingH`]};
  font-size: ${props => props.theme.button[`${props.size}FontSize`]};
  border-radius: ${props => props.theme.button[`${props.size}BRadius`]};

  &.text {
    color: ${props => props.theme.color[props.color]};

    &.disabled {
      color: ${props => props.theme.button.disabledColor};
    }
  }

  &.outline {
    color: ${props => props.theme.color[props.color]};
    border: 1px solid ${props => props.theme.color[props.color]};

    &.disabled {
      color: ${props => props.theme.button.disabledColor};
      border: 1px solid ${props => props.theme.button.disabledBRColor};
    }
  }

  &.contain {
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color[props.color]};

    &.disabled {
      color: ${props => props.theme.button.disabledColor};
      background-color: ${props => props.theme.button.disabledBGColor};
    }
  }

  &.round {
    border-radius: ${props => props.theme.button[`${props.size}RBRadius`]};
  }
`

const Button: React.SFC<ButtonProps> = (props) => {
  const className = clsx({
    round: props.round,
    disabled: props.disabled,
    [props.variant]: props.variant,
    [props.className]: props.className
  })

  return (
    <Container {...props} className={className}>
      {props.children}
    </Container>
  )
}

Button.defaultProps = {
  variant: 'contain',
  color: 'primary',
  size: 'medium'
}

export default Button
