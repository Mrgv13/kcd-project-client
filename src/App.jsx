import { Context } from './index'

import AppRouter from './app/AppRouter'

import NavBar from './app/components/navbar/NavBar'

import { BrowserRouter } from 'react-router-dom'
import { useContext } from 'react'
import { observer } from 'mobx-react'

const App = observer(() => {
  // const auth = useSelector((state) => state.auth.auth[0].type)
  const { user } = useContext(Context)
  console.log(user)

  return (
    <BrowserRouter>
      {user.isAuth ? <NavBar /> : <></>}
      <AppRouter />
    </BrowserRouter>
  )
})

export default App
