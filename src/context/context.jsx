import React, { createContext, useContext } from "react"

// Создаем контекст
export const AppContext = createContext()

export const AuthProvider = ({ children }) => {
  const appVersion = "0.0.1"

  return (
    <AppContext.Provider value={{ appVersion }}>{children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
