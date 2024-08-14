import React, { ButtonHTMLAttributes } from 'react'

type ButtonT = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset' | undefined
  size: 'md' | 'lg'
  mode?: "normal" | "outline"
}
const Button = ({ children, type, size, mode="normal", onClick }: ButtonT) => {
  return (
    <button
    style={{
      
      fontFamily: 'lato',
      borderRadius: '0.25rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      padding: size === 'md' ? '0.375rem 0.875rem' : '0.5rem 1rem',
      backgroundColor: mode === 'normal' ? '#F55F1B' : 'transparent',
      color: mode === 'normal' ? '#ffffff' : '#F55F1B',
      border: mode === 'normal' ? 'none' : '1px solid #F55F1B',
      transition: 'hover',
      filter: 'brightness(1.1)',
      fontWeight: 'bold',
      fontSize: size === 'md' ? '1rem' : '1.25rem',
      letterSpacing: '0.07rem',
    }}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button