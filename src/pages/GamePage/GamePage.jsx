import './gamePage.css'
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Preload, Loader } from "@react-three/drei";

import GridBox from "../../components/meshes/GridBox";
import WinnerLine from "../../components/meshes/WinnerLine";
import GameInfo from "../../components/GameInfo";
import GridLine from "../../components/meshes/GridLine";

// Import background image
import px from "../../assets/skybox/posx.jpg";
import nx from '../../assets/skybox/negx.jpg';
import py from '../../assets/skybox/posy.jpg';
import ny from '../../assets/skybox/negy.jpg';
import pz from '../../assets/skybox/posz.jpg';
import nz from '../../assets/skybox/negz.jpg';

const GamePage = () => {

    const positions = [
        [-2.4, 2.4, 0],
        [0, 2.4, 0],
        [2.4, 2.4, 0],
        [-2.4, 0, 0],
        [0, 0, 0],
        [2.4, 0, 0],
        [-2.4, -2.4, 0],
        [0, -2.4, 0],
        [2.4, -2.4, 0],
    ]

    function findWinner(gameboard) {
        let winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let i = 0; i < winningCombinations.length; i++) {
            let [a, b, c] = winningCombinations[i]

            if (gameboard[a] && gameboard[a] === gameboard[b] && gameboard[a] === gameboard[c]) {
                return [gameboard[a], winningCombinations[i]]
            }
        }
        return [null, null]
    }

    const [gameBoard, setGameBoard] = useState(Array(9).fill(null))
    const [nextTurn, setNextTurn] = useState(true)
    let [winner, positionIndices] = findWinner(gameBoard)

    const [emptyBoxes, setEmptyBoxes] = useState(gameBoard)

    function handleClick(i) {
        if (nextTurn === true) {
            const boardCopy = [...gameBoard]

            if (winner || boardCopy[i]) {
                return
            }

            boardCopy[i] = "O"
            setGameBoard(boardCopy)
            setNextTurn(prevNextTurn => !prevNextTurn)
            winner = findWinner(boardCopy)[0]
            setEmptyBoxes(boardCopy.filter(item => item === null))
            botMove(boardCopy)
        }
    };

    const botMove = (newBoard) => {
        setTimeout(() => {
            const botBoardCopy = [...newBoard]
            if (winner || !gameBoard.includes(null) || emptyBoxes.length === 0) {
                console.log('not fine')
                return
            }

            const changeMesh = () => {
                const randomNumber = Math.floor(Math.random() * 8)
                botBoardCopy[randomNumber] === null ? botBoardCopy[randomNumber] = "X" : changeMesh()
            }

            if (!winner && botBoardCopy.includes(null)) {
                changeMesh()
            }

            setGameBoard(botBoardCopy)
            setEmptyBoxes(botBoardCopy.filter(item => item === null))
            setNextTurn(prevNextTurn => !prevNextTurn)
        }, 1000)

    }

    const resetGameBoard = () => {
        setGameBoard(Array(9).fill(null))
        setNextTurn(true)
        setEmptyBoxes(gameBoard)
    };

    const loaderStyles = {
        width: '700px',
        height: '800px',
        backgrounColor: 'black',
        opacity: .5,
        color: 'red'
    }

    return (
        <div className='game-page'>
            <Canvas
                gl={{ antialias: false }}
                camera={{
                    fov: 50,
                    position: [-10, -5, -15],
                    rotation: [Math.PI, 0, 0]
                }}
            >
                <Preload all />
                <OrbitControls maxDistance={40} enableDamping />

                {/* lights */}
                <ambientLight />
                <pointLight
                    position={[-150, 300, -300]}
                    intensity={1}
                />

                {/* skybox*/}
                <Environment
                    background
                    files={[
                        px,
                        nx,
                        py,
                        ny,
                        pz,
                        nz,
                    ]}
                />

                {/* create grid */}
                <GridLine position={[1.3, 0, 0]} rotation={[0, 0, 0]} />
                <GridLine position={[-1.2, 0, 0]} rotation={[0, 0, 0]} />
                <GridLine position={[0, -1.2, 0]} rotation={[0, 0, Math.PI / 2]} />
                <GridLine position={[0, 1.2, 0]} rotation={[0, 0, Math.PI / 2]} />

                {positions.map((gridBox, idx) => {
                    return (
                        <GridBox
                            key={idx}
                            shape={gameBoard[idx]}
                            position={gridBox}
                            handleClick={() => handleClick(idx)}
                        />
                    )
                })}

                {/* Render the winner */}
                {winner ? <WinnerLine positions={positions} positionIndices={positionIndices} /> : null}

            </Canvas>

            <GameInfo
                gameBoard={gameBoard}
                nextTurn={nextTurn}
                winner={winner}
                resetGameBoard={resetGameBoard}
            />
        </div >
    )
};

export default React.memo(GamePage)