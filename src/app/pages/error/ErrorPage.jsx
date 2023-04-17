import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = ({ navigatTo }) => {
  const navigate = useNavigate()
  return (
    <div>
      oops... Something go wrong
      <button onClick={() => navigate(navigatTo)}>CLICK</button>
    </div>
  )
}

export default ErrorPage
