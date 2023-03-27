import React from 'react'

import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import App from 'app/App'
import { ErrorBoundary } from 'app/providers/ErrorProvider/ui/ErrorProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StoreProvider>
    <HashRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </HashRouter>
  </StoreProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
