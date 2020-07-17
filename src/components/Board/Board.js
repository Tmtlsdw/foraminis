import React, {useState} from 'react';
import "./Board.css";

const makeTile = (count) => {
    return count % 2 === 0 ?
        <div key={count} className={"even br4  pa1 bw1 ba bg-navy b--black-90 tiles"}></div> :
        <div key={count} className={"odd br4 pa1 bw1 ba bg-dark-blue b--black-90 tiles"}></div>;
}
const makeBoard = (thickness) => {
    let board = [];
    let counter = 0;
    for (let i = 0; i < thickness; i++) {
        let tiles = [];
        for (let j = 0; j < thickness; j++) {
            tiles[j] = makeTile(counter);
            counter++;
        }
        board[i] = <div key={i} className={"flex justify-center"}>{tiles}</div>;
    }
    return board;
}
const Board = (props) => {
    const {difficulty} = props;
    const [TilesBoard, setTilesBoard] = useState(() => makeBoard(difficulty));

    return (
        <div id={"Board"} className={"w-100"}>
            {TilesBoard}
        </div>
    );
}

export default Board;

//TODO Append Foes and Player.