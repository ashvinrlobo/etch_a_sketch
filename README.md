# Etch-A-Sketch

A simple Etch-A-Sketch web application where users can draw on a grid by hovering over squares. The grid size can be customized, and the hover effect can be toggled on or off.

## Features

- **Dynamic Grid Creation**: Users can specify the grid size (between 16x16 and 100x100).
- **Hover Effect**: Squares change color when hovered over.
- **Color Picker**: Users can select a custom color for the hover effect.
- **Toggle Hover**: Hover effect can be toggled on or off by clicking on a square.
- **Clear Grid**: The grid can be cleared and reset.

## File Structure

## How It Works

### Grid Creation
The grid is dynamically created using the `grid(rows, cols)` function. Each square is a `div` element styled to fit within the container.

### Hover Effect
The hover effect is applied using the `mouseover` event listener. The color of the square changes based on the selected color from the color picker.

### Toggle Hover
Clicking on a square toggles the hover effect on or off. This is controlled by the `isHoverEnabled` variable.

### Clear Grid
The grid can be cleared by resetting the container's inner HTML and recreating the grid.

## Functions

### `grid(rows, cols)`
Creates a grid of `rows x cols` squares inside the `.container` element.

### `getBoxSize(gridSize)`
Calculates the size of each square based on the grid size.

### `hoverEffect(event)`
Changes the background color of a square when hovered over.

### `color_choice()`
Returns the selected color from the color picker.

## Event Listeners

- **Apply Button**: Updates the grid size based on user input.
- **Container Click**: Toggles the hover effect on or off for squares.
- **Color Button**: Disables the hover effect and removes the `mouseover` event listeners from all squares.

## Usage

1. Open `index.html` in a browser.
2. Use the input field to specify the grid size (between 16 and 100) and click "Apply".
3. Hover over the squares to draw.
4. Use the color picker to select a custom color.
5. Click on a square to toggle the hover effect.
6. Click the "Clear" button to reset the grid.

## Requirements

- A modern web browser (Chrome, Firefox, Edge, etc.)
- No additional dependencies or libraries are required.
