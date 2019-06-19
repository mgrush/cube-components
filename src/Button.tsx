import React, { MouseEvent } from 'react'

interface ButtonProps {
  text: string;
  onClick: (e: MouseEvent) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div onClick={props.onClick}>{props.text} xx !! mgrush -- hhh </div>
  ) 
}

export default Button
