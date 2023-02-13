import './App.css'
import { Routes, Route } from 'react-router-dom'
import GamePage from './pages/GamePage'
import HomePage from './pages/HomePage'

const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/game' element={<GamePage />} />
            </Routes>
        </div>
    )
}

export default App
