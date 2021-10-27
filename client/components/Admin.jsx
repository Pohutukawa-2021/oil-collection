import React from 'react'

export function IfAdmin ({ children, admin }) {
  return admin === 1 || admin === true
    ? <>{children}</>
    : null
}

export function IfNotAdmin ({ children, admin }) {
  return admin !== 1 && admin !== true
    ? <>{children}</>
    : null
}
