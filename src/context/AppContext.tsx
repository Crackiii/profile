import React from 'react'
import { createContext, useContextSelector } from 'use-context-selector'

type Theme = 'light' | 'dark'

export interface ContextType {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

// Initialize the context with default values
export const InitialState: ContextType = {
  theme: 'light',
  setTheme: () => ''
}

export const AppContext = createContext<ContextType | undefined>(undefined)

const AppContextProvider = (props: { children: JSX.Element }) => {
  const [theme, setTheme] = React.useState<Theme>(() => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    return systemPrefersDark ? 'dark' : 'light'
  })

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => setTheme(mediaQuery.matches ? 'dark' : 'light')

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default React.memo(AppContextProvider)

export const useAppContext = () => {
  const contextValue = useContextSelector(AppContext, (state) => state)

  if (!contextValue) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }

  return contextValue
}
