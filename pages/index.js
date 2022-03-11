// import Head from 'next/head'
// import Image from 'next/image'
// import Sidebar from '../components/Sidebar'
import HomePage from '../components/HomePage'
// import styles from '../styles/Home.module.css'
// import { useSession, signIn, signOut } from "next-auth/react"
// import Loggedin from './loggedin'
// import Link from 'next/link'
// import Login from './2'

// export default function Home() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         <h1>Signed in as {session.user.email}</h1>
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       {/* <HomePage /> */}

//       <h1>Not signed in</h1>

//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <HomePage />
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}