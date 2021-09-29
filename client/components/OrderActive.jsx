import React from 'react'

export function IfOrderActive ({ children, orderActive }) {
  return orderActive === 1 || orderActive === true
    ? <>{children}</>
    : null
}

export function IfNotOrderActive ({ children, orderActive }) {
  return orderActive !== 1 && orderActive !== true
    ? <>{children}</>
    : null
}
