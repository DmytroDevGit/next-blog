import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  className?: string,
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning',
}

export default function Button(
  { children, className, variant = 'default', ...props } : ButtonProps
) {
  let curVariant;
  switch(variant) {
    case 'primary':
      curVariant = 'border-2 border-blue-200 bg-blue-200 hover:bg-blue-300 active:bg-blue-400 text-gray-700';
      break;
    case 'secondary':
      curVariant = 'border-2 border-black bg-black hover:bg-white hover:text-black active:bg-gray-200 text-white';
      break;
    case 'success':
      curVariant = 'border-2 border-green-200 bg-green-200 hover:bg-green-300 active:bg-green-400 text-gray-700';
      break;
    case 'warning':
      curVariant = 'border-2 border-red-200 bg-red-200 hover:bg-red-300 active:bg-red-400 text-gray-700';
      break;
    default:
      curVariant = 'border-2 border-black bg-gray-200 hover:bg-gray-50 active:bg-gray-100'
  }
  return (
    <button
      className={`cursor-pointer transition p-2 font-bold ${className} ${curVariant} ${props.disabled && 'opacity-60 pointer-events-none'}`}
      {...props}
    >
      {children}
    </button>
  )
}
