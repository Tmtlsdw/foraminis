import React, {useState} from 'react';
import Board from "../Board/Board";

const Play = () => {
    const [Play, setPlay] = useState(
        <div
            className={"link dim pa5 br4 ma5 self-center shadow-1 f1 grow "}
            onClick={() => setPlay(<Board difficulty={9}/>)}>
            Start Game !
        </div>)
    return (
        <div id={"Play"} className={"flex justify-center "}>
            {Play}
        </div>
    );
}

export default Play;
