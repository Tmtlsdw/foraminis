import React from "react";


const GameData = ({killed=0, wave=0, move=0}) => (

    <div className={"ma1 pa1 f3"}>
        {move > 1 ?
        <div>Moves lefts : {move} </div> :
        <div>Move left : {move} </div> }
    Erased : {killed}
        {" "}
    Wave : {wave}
    </div>
)

export default GameData;