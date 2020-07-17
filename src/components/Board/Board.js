import React, {useState} from 'react';

const makeTile = (count) => {
    return count % 2 === 0 ?
        <div key={count} className={"even br4 ma1 pa1 bw1 ba bg-navy b--black-90"}>Even</div> :
        <div key={count} className={"odd br4 ma1 pa1 bw1 ba bg-dark-blue b--black-90"}>Odd</div>;
}
const makeBoard = (thickness = 1) => {
    let board = [];
    let counter = 0;
    let tiles = [];
    for (let i = 0; i < thickness; i++) {
        for (let j = 0; j < thickness; j++) {
            tiles = [makeTile(counter)];
            counter++;
        }
        board[i] = tiles;
        console.log(board);
    }
    return board;
}
const Board = () => {
    const [TilesBoard, setTilesBoard] = useState(false);
    return (
        <div id={"Board"} className={"tc"}
             onLoad={setTilesBoard(makeBoard())}
        >
            {TilesBoard}
        </div>
    );
}

export default Board;
