import React, {useState, Fragment} from 'react';
import './App.css';
import Logo from '../components/Logo/Logo';
import Login from '../components/Login/Login';
import Play from '../components/Play/Play';
import Register from '../components/Register/Register';
import Logout from '../components/Logout/Logout';
import Ladder from '../components/Ladder/Ladder';
import Player from '../components/Player/Player';
import Foe from '../components/Foe/Foe';


const App = () => {
    const [Logged, setLogged] = useState(false)
    const [InGame, setInGame] = useState(false)
    return (
        <div id={"App"} className={"h-100 w-100 tc flex flex-column "}>
            <div className={"flex justify-between"}>
                <Logo/>
                <div className={"flex"}>
                    {Logged === true ?
                        <Logout logged={Logged}/> :
                        <Fragment>
                            <Register logged={Logged}/>
                            <Login logged={Logged}/>
                        </Fragment>}
                </div>
            </div>
            <div className={" ma5 pa2 "}>
                <Play/>
            </div>
            <div>
                <Ladder/>
            </div>
            <div id={"Game"} className={"flex ma5"}>
                <Player/>
                <Foe/>
            </div>
        </div>
    );
}

export default App;
//TODO Make Log Out / Log In, Register switch display
//TODO Make Game
