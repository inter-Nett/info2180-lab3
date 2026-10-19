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

        // Exercise 2: Add X or O when clicked
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

        // Exercise 3: Add hover effect when mouse enters
        square.addEventListener("mouseenter", function() {
            square.classList.add("hover");
        });

        // Remove hover effect when mouse leaves
        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });

    });

});
