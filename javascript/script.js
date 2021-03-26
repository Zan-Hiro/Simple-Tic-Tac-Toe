'use strict';

const Player = (() => {
	let hasSymbol = false;
	return hasSymbol;
});

const DOM = (() => {
	const squares = document.querySelectorAll('.square');
	const changeText = document.querySelector('.changeText');
	const playerPointsText = document.querySelector('.player-points');
	const computerPointsText = document.querySelector('.computer-points');
	const restartBtn = document.querySelector('.restartBtn');

	return {
		squares,
		changeText,
		playerPointsText,
		computerPointsText,
		restartBtn
	};

})();

const checkWinner = (() => {
	const topLeftSquare = DOM.squares[0].classList[1];
	const topMiddleSquare = DOM.squares[1].classList[1];
	const topRightSquare = DOM.squares[2].classList[1];
	const MiddleLeftSquare = DOM.squares[3].classList[1];
	const MiddleMiddleSquare = DOM.squares[4].classList[1];
	const MiddleRightSquare = DOM.squares[5].classList[1];
	const BottomLeftSquare = DOM.squares[6].classList[1];
	const BottomMiddleSquare = DOM.squares[7].classList[1];
	const BottomRightSquare = DOM.squares[8].classList[1];

	return {
		topLeftSquare, topMiddleSquare, topRightSquare,
		MiddleLeftSquare, MiddleMiddleSquare, MiddleRightSquare,
		BottomLeftSquare, BottomMiddleSquare, BottomRightSquare};
});

const DOMManipulator = (() => {
	let gameOverCheck = false;

	DOM.squares.forEach(square => square.addEventListener('click', e => {
		const target = e.target;
		const squareId = e.target.id;
		
		if(squareId && target.classList[1] !== 'circle' && !Player.hasSymbol && !gameOverCheck) {
			target.classList.add('cross');
			Player.hasSymbol = true;
		} else if(squareId && target.classList[1] !== 'cross' && Player.hasSymbol && !gameOverCheck) {
			target.classList.add('circle');
			Player.hasSymbol = false;
		}

			if((checkWinner().topLeftSquare === "cross" && checkWinner().topMiddleSquare === "cross" && checkWinner().topRightSquare === "cross") || (checkWinner().MiddleLeftSquare === "cross" && checkWinner().MiddleMiddleSquare === "cross" && checkWinner().MiddleRightSquare === "cross") || (checkWinner().BottomLeftSquare === "cross" && checkWinner().BottomMiddleSquare === "cross" && checkWinner().BottomRightSquare === "cross") || (checkWinner().topLeftSquare === "cross" && checkWinner().MiddleMiddleSquare === "cross" && checkWinner().BottomRightSquare === "cross") || (checkWinner().topRightSquare === "cross" && checkWinner().MiddleMiddleSquare === "cross" && checkWinner().BottomLeftSquare === "cross") || (checkWinner().topLeftSquare === "cross" && checkWinner().MiddleLeftSquare === "cross" && checkWinner().BottomLeftSquare === "cross") || (checkWinner().topMiddleSquare === "cross" && checkWinner().MiddleMiddleSquare === "cross" && checkWinner().BottomMiddleSquare === "cross") || (checkWinner().topRightSquare === "cross" && checkWinner().MiddleRightSquare === "cross" && checkWinner().BottomRightSquare === "cross")) {
	
				DOM.changeText.innerText = "PlayerX Won!";

				gameOverCheck = true;
				
			} else if((checkWinner().topLeftSquare === "circle" && checkWinner().topMiddleSquare === "circle" && checkWinner().topRightSquare === "circle") || (checkWinner().MiddleLeftSquare === "circle" && checkWinner().MiddleMiddleSquare === "circle" && checkWinner().MiddleRightSquare === "circle") || (checkWinner().BottomLeftSquare === "circle" && checkWinner().BottomMiddleSquare === "circle" && checkWinner().BottomRightSquare === "circle") || (checkWinner().topLeftSquare === "circle" && checkWinner().MiddleMiddleSquare === "circle" && checkWinner().BottomRightSquare === "circle") || (checkWinner().topRightSquare === "circle" && checkWinner().MiddleMiddleSquare === "circle" && checkWinner().BottomLeftSquare === "circle") || (checkWinner().topLeftSquare === "circle" && checkWinner().MiddleLeftSquare === "circle" && checkWinner().BottomLeftSquare === "circle") || (checkWinner().topMiddleSquare === "circle" && checkWinner().MiddleMiddleSquare === "circle" && checkWinner().BottomMiddleSquare === "circle") || (checkWinner().topRightSquare === "circle" && checkWinner().MiddleRightSquare === "circle" && checkWinner().BottomRightSquare === "circle")) {
	
				DOM.changeText.innerText = "PlayerO Won!";
				gameOverCheck = true;
	
			} else if(checkWinner().topLeftSquare && checkWinner().topMiddleSquare && checkWinner().topRightSquare && checkWinner().MiddleLeftSquare && checkWinner().MiddleMiddleSquare && checkWinner().MiddleRightSquare && checkWinner().BottomLeftSquare && checkWinner().BottomMiddleSquare && checkWinner().BottomRightSquare) {
				
				DOM.changeText.innerText = "Game was Tie!";

				gameOverCheck = true;
			}
		}));

		DOM.restartBtn.addEventListener('click', () => {
			DOM.squares.forEach(square => square.classList.remove('circle'));
			DOM.squares.forEach(square => square.classList.remove('cross'));
			DOM.changeText.innerText = "";
			gameOverCheck = false;
		})
	})();
