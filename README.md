# Etch-a-Sketch

## Project Overview
This project is part of the The Odin Project: Foundations Course aimed at improving DOM manipulation skills in JavaScript. The browser-based Etch-a-Sketch application allows users to create a grid and sketch on it by hovering over the squares. Users can also dynamically adjust the grid size and enjoy a unique darkening effect for each square as it interacts with the mouse.

The challenge here is to practice using Flexbox for layout and enhance your JavaScript skills by manipulating the DOM dynamically.

## Features
- Dynamic Grid Creation: A grid (initially 16x16) is generated using JavaScript, where each square is a div.
- Hover Effect: Squares change color randomly when the mouse hovers over them.
- Progressive Darkening: Each interaction with a square darkens its color by 10% until it becomes fully black.
- Grid Resizing: Users can dynamically change the grid size using a slider, which adjusts the number of squares per side (up to a max of 100).

## How It Works
1. A slider allows users to control the number of squares per side, ranging from 1 to 100.
2. Each square is sized dynamically based on the grid size to maintain the same total grid width (960px).
3. The hover interaction darkens each square progressively by adjusting its RGB value.

## How to Use
1. Open the webpage in your browser.
2. Use the slider to change the grid size. The label next to the slider will update to show the current grid size.
3. Move your mouse over the grid, and each square will change color randomly. Every time you hover over a square, it will become progressively darker.
4. Play around and create pixel-like art on the grid!

## Project Assignment
1. Create the Grid: Use JavaScript to dynamically generate a grid of square div elements. Use Flexbox for layout to make the squares fit inside a container.
2. Mouse Hover Effect: When the mouse moves over a square, change its background color randomly. Implement a progressive darkening effect, so that each square becomes fully black after ten interactions.
3. Grid Resizing: Add a slider to adjust the number of squares in the grid. The grid must resize to fit the same total width, regardless of the number of squares.
4. Code Responsiveness: Ensure the grid is responsive, with squares resizing based on the total grid size and number of squares.

## Extra Credit Features
- Random RGB Colors: On mouse hover, each square changes to a random RGB value.
- Darkening Effect: With each mouseover, the square's color darkens by 10% until it becomes completely black.

## Technologies Used:
- HTML5: Structure of the webpage.
- CSS3: Styling and layout using Flexbox.
- JavaScript: DOM manipulation and interactivity.
