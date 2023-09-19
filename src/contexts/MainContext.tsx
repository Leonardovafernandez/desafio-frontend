import { ReactNode } from 'react';
import { createContext } from 'react'
import useMainProvider from '../hooks/useMainProvider.2';

interface AppProviderProps {
  children: ReactNode;
}

export const MainContext = createContext({})

export function MainContextProvider({children}: AppProviderProps) {
  const values = useMainProvider();

  return (
    <MainContext.Provider value={values}>
      {children}
    </MainContext.Provider>
    )
}