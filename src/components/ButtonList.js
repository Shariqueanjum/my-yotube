import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Cricket"/>
      <Button name="Movies"/>
      <Button name="Gaming"/>
      <Button name="Live"/>
      <Button name="Sports"/>
      <Button name="News"/>
      <Button name="New Update"/>
    </div>
  )
}

export default ButtonList