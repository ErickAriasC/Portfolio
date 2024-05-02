
import React from 'react'

export const Container = ({children,style}) => {
  return (
    <div className={style}>
        {children}
    </div>
  )
}
