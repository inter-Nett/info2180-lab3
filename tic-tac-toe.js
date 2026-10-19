document.addEventListener("DOMContentLoaded", function() {

    // Select all nine squares on the game board
    const squares = document.querySelectorAll("#board div");

    // Keep track of the current player
    let currentPlayer = "X";

    // Store the game board's state
    let gameBoard = ["", "", "", "", "", "", "", "", ""];

    // Add the square class to each div
    squares.forEach(function(square, index) {

        square.classList.add("square");

        // Add a click event to each square
        square.addEventListener("click", function() {

            // Display the current player's symbol
            square.textContent = currentPlayer;

            // Apply the appropriate CSS class
            square.classList.add(currentPlayer);

            // Update the game board array
            gameBoard[index] = currentPlayer;

            // Switch to the next player
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        });

    });

});
