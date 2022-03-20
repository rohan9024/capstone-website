
import HomePage from '../components/HomePage'
import { LoginContext } from './Contexts/LoginContext'

export default function Component() {

  return (
    <LoginContext.Provider>
      <HomePage />
    </LoginContext.Provider>
  )
}