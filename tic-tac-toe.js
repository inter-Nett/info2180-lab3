document.addEventListener("DOMContentLoaded", function() {

    // Exercise 1: Select and style the game board
    const squares = document.querySelectorAll("#board div");
    const status = document.querySelector("#status");

    // Exercise 2: Keep track of the current player and game board
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

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

            // Display the current player's symbol
            square.textContent = currentPlayer;

            // Apply the appropriate CSS class
            square.classList.add(currentPlayer);

            // Update the game board array
            gameBoard[index] = currentPlayer;

            // Exercise 4: Check if a player has won
            checkWinner();

            // Switch to the next player
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        });

        // Exercise 3: Add hover effect
        square.addEventListener("mouseenter", function() {
            square.classList.add("hover");
        });

        // Exercise 3: Remove hover effect
        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });

    });

    // Exercise 4: Check for a winner
    function checkWinner() {

        // Loop through all possible winning combinations
        for (let combination of winningCombinations) {

            const [a, b, c] = combination;

            // Check if three squares contain the same symbol
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

});
