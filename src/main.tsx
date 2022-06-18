import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material';
import { AppRouter } from './router/AppRouter';
import { MainLayout } from './layouts/MainLayout';
import { ThemeContextProvider } from './context';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CssBaseline/>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </ThemeContextProvider>
  </React.StrictMode>
)
