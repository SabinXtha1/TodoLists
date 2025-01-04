import React from 'react'
import { SessionProvider } from 'next-auth/react'
import SignIn from './components/sign-in'
import HomePage from './components/yelo'
import { ToastContainer } from 'react-toastify'

const page = () => {
  return (
    <SessionProvider>
<ToastContainer/>
    <div>
    <HomePage/>
      </div>
    </SessionProvider>
  )
}

export default page