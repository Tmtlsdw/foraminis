import React from 'react';
import './App.css';
// import Logo from '../components/Logo/Logo';
// import Login from '../components/Login/Login';
// import Play from '../components/Play/Play';
// import Register from '../components/Register/Register';
// import Logout from '../components/Logout/Logout';
// import Ladder from '../components/Ladder/Ladder';
// import Player from '../components/Player/Player';
// import Foe from '../components/Foe/Foe';
import Board from '../components/Board/Board';


const App = () => {
    return (
        <div id={"App"} className={"h-100 w-100 tc flex flex-column "}>
            {/*<div className={"flex justify-between"}>*/}
            {/*    <Logo/>*/}
            {/*    <div className={"flex"}>*/}
            {/*        <Register/>*/}
            {/*        <Login/>*/}
            {/*        <Logout/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={" ma5 pa2 self-center shadow-1 grow br4 "}>*/}
            {/*    <Play/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Ladder/>*/}
            {/*</div>*/}
            <div id={"Game"} className={"flex ma5"}>
                {/*<Player/>*/}
                {/*<Foe/>*/}
                <Board/>
            </div>
        </div>
    );
}

export default App;
//TODO Make Log Out / Log In, Register switch display
//TODO Make Game
//TODO Make Board