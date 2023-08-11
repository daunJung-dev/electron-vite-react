import { useState } from 'react'
import './App.scss'
import { Theme } from '@radix-ui/themes'
import AppRoute from './routes'

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {
  const [count, setCount] = useState(0)
  return (
    <Theme>
      <AppRoute />
    </Theme>
  )
}

export default App
