import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material';
import { AppRouter } from './router/AppRouter';
import { MainLayout } from './layouts/MainLayout';
import { ThemeContextProvider,DragAndDropProvider, GameContextProvider } from './context';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DragAndDropProvider>
        <GameContextProvider>
          <CssBaseline/>
          <MainLayout>
            <AppRouter />
          </MainLayout>
        </GameContextProvider>
      </DragAndDropProvider>
    </ThemeContextProvider>
  </React.StrictMode>
)