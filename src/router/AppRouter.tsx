import { GameScreen, MenuScreen, GameOverScreen } from '../screens';

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MenuScreen />} />
            <Route path="/game" element={<GameScreen/>} />
            <Route path="/game-over" element={<GameOverScreen/>} />
            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    </BrowserRouter>
  )
}