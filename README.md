# Battleship

_for The Odin Project_

## Makes use of:

- Webpack
- Jest
- Eslint (Airbnb), Prettier

## Features:

This is a simple Battleship game where you take turns with the computer.

This project features drag-and-drop functionality for player ship placement. Unfortunately, at this moment the game is unplayable on mobile phones due to the drag events not being supported.

The AI doesn't cheat but isn't too smart either.

### How AI works:

- With no hits detected, computer will randomly pick a random cell on the board.
- If it lands a hit, it will randomly shoot around that cell.
- If it hits for the second time, it looks for either horizontal or vertical trends and shoots accordingly till it sinks the ship or runs out of legal moves. If there's no legal moves along the trend, it reverts back to randomly shooting around one of the hit cells. If, again, it runs out of legal moves, it goes back to square one and picks a random cell.
- Horizontal and vertical trends are treated separately, even if they cross each other. However, the AI doesn't keep track of sunk ships' length and doesn't prioritize any trend - it picks one at random.
