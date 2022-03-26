import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: any,
    type: any,
    onClick: any,
    buttonStyle: any,
    buttonSize: any
}


export const Button = ({
    className,
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    // <Link to='/latest-collab' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    // </Link>
  );
};