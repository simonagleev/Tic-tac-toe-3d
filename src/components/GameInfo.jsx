import React from 'react';
import { Link } from 'react-router-dom';

const GameInfo = ({ gameBoard, nextTurn, winner, resetGameBoard }) => {
    return (
        <>
            <Link to="/">
                <div className='back-btn'>
                    На главную
                </div>
            </Link>

            <div className='title'>
                Крестики-нолики
            </div>
            <div className='textBottomSection'>
                <div className='winnerMove'>
                    {
                        winner
                            ? winner === "O" ? "Вы победили! Вау!!!" : winner + " победили!"
                            : !winner && !gameBoard.includes(null)
                                ? "Ничья!"
                                : "Сейчас ходят: " + (nextTurn ? "O" : "X")
                    }
                </div>
                <div onClick={resetGameBoard}>
                    <button className='restartButton'>
                        Начать заного
                    </button>
                </div>
            </div>
        </>
    );
}

export default React.memo(GameInfo);