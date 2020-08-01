import React from "react";
import {render} from "react-dom";
import "./index.css";
import "tachyons";
import Foraminis from "./containers/Foraminis";
import * as serviceWorker from "./serviceWorker";
import {RecoilRoot} from "recoil/dist";



const rootElement = document.getElementById("root");

render(
	<React.StrictMode>
		<RecoilRoot>
			<Foraminis/>
		</RecoilRoot>
	</React.StrictMode>
	,
	rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();