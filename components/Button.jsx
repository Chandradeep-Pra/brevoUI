import React from 'react'

const Button = ({btnText, btnClasses}) => {
  return (
    <button className={btnClasses}>
        {btnText}
    </button>
  )
}

export default Button