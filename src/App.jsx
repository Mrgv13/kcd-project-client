import { Context } from './index'

import AppRouter from './app/AppRouter'

import NavBar from './app/components/navbar/NavBar'

import { check } from './common/http/user-api'

import { BrowserRouter } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { BeatLoader } from 'react-spinners'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data)
        user.setAuth(true)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <BeatLoader
        style={{ position: 'absolute', top: '50%', left: '50%' }}
        color="#6200EE"
      />
    )
  }

  return (
    <BrowserRouter>
      {user.isAuth ? <NavBar /> : <></>}
      <AppRouter />
    </BrowserRouter>
  )
})

export default App
