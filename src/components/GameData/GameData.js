import React from "react";


const GameData = ({erased=0, wave=0, move=0}) => (

    <div className={"ma1 f3"}>
        {move > 1 ?
        <div>Moves lefts : {move} </div> :
        <div>Move left : {move} </div> }
    Erased : {erased}
        {" "}
    Wave : {wave}
    </div>
)

export default GameData;