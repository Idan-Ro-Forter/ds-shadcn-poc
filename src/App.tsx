import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import { Combobox, Option } from './components/ui/combobox'

function App() {
  const [count, setCount] = useState(0)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'kiwi', label: 'Kiwi' },
  ]

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

        <div className="mt-8 flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Combobox Examples</h2>
          <div className="flex flex-col items-start gap-4">
            <div>
              <p className="mb-2 text-left">Single Select:</p>
              <Combobox
                options={options}
                emptyMessage="No fruits found"
                placeholder="Select a fruit"
                value={selectedOption || undefined}
                onValueChange={(option) => setSelectedOption(option as Option)}
              />
            </div>

            <div>
              <p className="mb-2 text-left">Multi Select:</p>
              <Combobox
                options={options}
                emptyMessage="No fruits found"
                placeholder="Select fruits"
                value={selectedOptions}
                onValueChange={(options) => setSelectedOptions(options as Option[])}
                multiselect
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
