import './App.css';
import { Routes, Route } from 'react-router-dom';
import GamePage from './pages/GamePage';

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<GamePage />} />
                <Route path='/home' element={<GamePage />} />
            </Routes>
        </div>
    )
}

export default App
