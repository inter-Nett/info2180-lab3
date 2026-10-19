document.addEventListener("DOMContentLoaded", function() {

    // Select all nine squares on the game board
    const squares = document.querySelectorAll("#board div");

    // Add the square class to each div
    squares.forEach(function(square) {
        square.classList.add("square");
    });

});