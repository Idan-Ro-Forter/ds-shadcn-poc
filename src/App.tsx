import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Design System POC with Shadcn</h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground">
          A design system proof of concept using React 19, Tailwind CSS, and Shadcn components.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => setCount((count) => count + 1)}>Count is {count}</Button>
          <Button variant="outline">Documentation</Button>
        </div>
      </div>
    </div>
  )
}

export default App
