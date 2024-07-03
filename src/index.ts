import GridUtils from "./grid/gridUtils";

function main() {
  let grid = GridUtils.generateGridWithUnvisited(10, 10);
  GridUtils.setGridStart(grid, 0, 5);
  GridUtils.setGridEnd(grid, 9, 5);
  GridUtils.setGridWall(grid, 4, 5);

  GridUtils.breadthFirstSearch(grid);
}

main();
