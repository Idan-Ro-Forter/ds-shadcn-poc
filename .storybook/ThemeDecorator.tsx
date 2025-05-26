import React, { useEffect } from 'react'
import { StoryFn } from '@storybook/react'
import { ThemeProvider } from '../src/components/theme-provider'
import { useGlobals } from '@storybook/preview-api'

export const ThemeDecorator = (Story: StoryFn) => {
  const [{ theme }] = useGlobals()
  const [mounted, setMounted] = React.useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  // Prevent flash of unstyled content
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <ThemeProvider defaultTheme={theme || 'light'}>
      <div className="bg-background p-4">
        <Story />
      </div>
    </ThemeProvider>
  )
}
