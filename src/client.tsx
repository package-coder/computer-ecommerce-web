
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

const QueryProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default QueryProvider