document.addEventListener("DOMContentLoaded", function() {

    // Exercise 1: Select and style the game board
    const squares = document.querySelectorAll("#board div");
    const status = document.querySelector("#status");

    // Exercise 5: Select the New Game button
    const newGameButton = document.querySelector(".btn");

    // Exercise 2: Keep track of the current player and game board
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Exercise 6: Track whether the game has ended
    let gameOver = false;

    // Save the original status message
    const originalStatus = status.textContent;

    // Exercise 4: Define all possible winning combinations
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Add event listeners to each square
    squares.forEach(function(square, index) {

        // Exercise 1: Add the square class
        square.classList.add("square");

        // Exercise 2: Add X or O when clicked
        square.addEventListener("click", function() {

            // Exercise 6: Prevent cheating
            // Do nothing if the square is occupied or the game is over
            if (gameBoard[index] !== "" || gameOver) {
                return;
            }

            // Display the current player's symbol
            square.textContent = currentPlayer;

            // Apply the appropriate CSS class
            square.classList.add(currentPlayer);

            // Update the game board array
            gameBoard[index] = currentPlayer;

            // Exercise 4: Check if a player has won
            if (checkWinner()) {
                gameOver = true;
                return;
            }

            // Check whether the board is full (draw)
            if (gameBoard.every(function(cell) {
                return cell !== "";
            })) {
                status.textContent = "It's a Draw!";
                gameOver = true;
                return;
            }

            // Switch to the next player
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        });

        // Exercise 3: Add hover effect
        square.addEventListener("mouseenter", function() {
            if (gameBoard[index] === "" && !gameOver) {
                square.classList.add("hover");
            }
        });

        // Exercise 3: Remove hover effect
        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });

    });

    // Exercise 4: Check for a winner
    function checkWinner() {

        for (let combination of winningCombinations) {

            const [a, b, c] = combination;

            if (
                gameBoard[a] !== "" &&
                gameBoard[a] === gameBoard[b] &&
                gameBoard[b] === gameBoard[c]
            ) {

                // Display the winner
                status.textContent = "Congratulations! " +
                    gameBoard[a] + " is the Winner!";

                // Apply the winning style
                status.classList.add("you-won");

                return true;
            }
        }

        return false;
    }

    // Exercise 5: Restart the game
    newGameButton.addEventListener("click", function() {

        // Reset the current player
        currentPlayer = "X";

        // Reset the game-over status
        gameOver = false;

        // Clear the game board array
        gameBoard = ["", "", "", "", "", "", "", "", ""];

        // Clear all squares
        squares.forEach(function(square) {

            square.textContent = "";

            // Remove player and hover classes
            square.classList.remove("X", "O", "hover");

        });

        // Restore the original status message
        status.textContent = originalStatus;

        // Remove the winning style
        status.classList.remove("you-won");

    });

});