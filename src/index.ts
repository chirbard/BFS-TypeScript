import GridUtils from "./grid/gridUtils";

function main() {
  let grid = GridUtils.generateGridWithUnvisited(10, 10);
  GridUtils.setGridStart(grid, 0, 5);
  GridUtils.setGridEnd(grid, 9, 5);
  GridUtils.setGridWall(grid, 4, 5);

  GridUtils.breadthFirstSearch(grid);

  // console.log(grid);
}

main();

// let grid = GridUtils.generateGridWithUnvisited(10, 10);
// GridUtils.setGridStart(grid, 0, 5);
// GridUtils.setGridEnd(grid, 9, 5);
// GridUtils.setGridWall(grid, 4, 5);

// GridUtils.breadthFirstSearch(grid);

// window.onload = () => {
//   const canvas = document.getElementById("canvas") as HTMLCanvasElement;
//   if (canvas) {
//     const context = canvas.getContext("2d");
//     if (context) {
//       drawGrid(context);
//     }
//   }
// };

// function drawRectangle(context: CanvasRenderingContext2D) {
//   context.fillStyle = "#FF0000"; // Red color
//   context.fillRect(50, 50, 150, 100); // Draw rectangle at (50, 50) with width 150 and height 100
// }

// function drawGrid(context: CanvasRenderingContext2D) {
//   const cellSize = 20;
//   for (let y = 0; y < grid.length; y++) {
//     for (let x = 0; x < grid[0].length; x++) {
//       context.fillStyle = "#FF0000";
//       context.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
//     }
//   }
// }
