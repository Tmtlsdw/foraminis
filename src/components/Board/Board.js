import React from "react";
import "./Board.css";

const Board = ({difficulty}) => {

	const colorRed = () => {
		console.log(document.getSelection());
		console.log(document.getSelection().baseNode);
		console.log(document.getSelection().baseNode.id);
		console.log(document.getSelection().baseNode.classList);
		console.log(document.getElementsByTagName("div"));
		let tile = document.getSelection().baseNode;
		if (tile.classList.contains("foe")) {
		tile.classList.remove("foe")
		tile.classList.add("player")
		} else {
		tile.classList.remove("player")
		tile.classList.add("foe")
		}
	};

	// divElement.style({
	// 	backgroundColor: "red"
	// })
	;
	const makeTile = (count) => {
		let color = "br4 bw1 block ba b--black-90 tiles " + (count % 2 === 0 ? "even" : "odd");
		return (<div key={count} id={count} onClick={() => colorRed()}
		             className={color}></div>);
	};
	const makeBoard = (thickness) => {
		let board = [];
		let counter = 0;
		for (let i = 0; i < thickness; i++) {
			let tiles = [];
			for (let j = 0; j < thickness; j++) {
				tiles[j] = makeTile(counter);
				// console.log(tiles[j])
				counter++;
			}
			board[i] = <div key={i} className={"flex justify-center"}>{tiles}</div>;
		}
		// console.log(board[0].props.children[0].props.id);
		return board;
	};
	return (<div id={"Board"} className={"w-100"}>
			{makeBoard(difficulty)}
		</div>
	);
};

export default Board;

//TODO Append Foes and Player.