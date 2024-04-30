import { useState } from "react";
import { Square } from "./square";

export const TicTok = () => {
    const [isNextX, setIsNextX] = useState(true);
    const [squares, setSquares] = useState<string[]>(Array(9).fill(null));

    const calculateWinner = (nextSquares: string[]) => {
        const combinations = [[0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,7],[2,4,6]];
        const winner = combinations.find((combination: number[]) => {
            const[a, b, c] = combination;
            return nextSquares[a] && nextSquares[a] === nextSquares[b] && nextSquares[a] === nextSquares[c]
        })

        return winner && nextSquares[winner[0]]
    }

    const handleSquareClick = (index: number) => {
       
        if(squares[index] || calculateWinner(squares)) {
            return;
        }

         const nextSquares = squares.slice();
        if(isNextX) {
            nextSquares[index] = 'X';
        } else {
            nextSquares[index] = 'O';
        }

        setSquares(nextSquares);
        setIsNextX(!isNextX);
    }

    const winner = calculateWinner(squares);

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (isNextX ? 'X' : 'O');
    }

    return (
        <div className="container flex justify-center items-center align-middle h-screen w-screen">
            <div className="status">{status}</div>
            <div className="flex flex-row">
            <div>
                <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
            </div>
            <div>
                <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
            </div>
            <div>
                <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
            </div>
        </div>
        </div>

        )
}