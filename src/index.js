"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gridUtils_1 = __importDefault(require("./grid/gridUtils"));
function main() {
    let grid = gridUtils_1.default.generateGridWithUnvisited(10, 10);
    gridUtils_1.default.setGridStart(grid, 0, 5);
    gridUtils_1.default.setGridEnd(grid, 9, 5);
    gridUtils_1.default.setGridWall(grid, 4, 5);
    gridUtils_1.default.breadthFirstSearch(grid);
}
main();
