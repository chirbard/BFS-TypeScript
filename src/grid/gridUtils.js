"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gridNode_1 = __importDefault(require("./gridNode"));
const move_1 = __importDefault(require("./move"));
const gridConstants_1 = require("./gridConstants");
class GridUtils extends move_1.default {
    static generateGridWithUnvisited(xSize, ySize) {
        let grid = [];
        for (let i = 0; i < ySize; i++)
            grid.push(GridUtils.generateGridRow(xSize));
        return grid;
    }
    static setGridStart(grid, x, y) {
        const lastStart = GridUtils.findNodeWithData(grid, gridConstants_1.START);
        if (lastStart != undefined) {
            grid[lastStart[0]][lastStart[1]].setData(gridConstants_1.UNVISITED);
        }
        grid[x][y].setData(gridConstants_1.START);
        return grid;
    }
    static setGridEnd(grid, x, y) {
        const lastEnd = GridUtils.findNodeWithData(grid, gridConstants_1.END);
        if (lastEnd != undefined) {
            grid[lastEnd[0]][lastEnd[1]].setData(gridConstants_1.UNVISITED);
        }
        grid[x][y].setData(gridConstants_1.END);
        return grid;
    }
    static setGridWall(grid, x, y) {
        grid[x][y].setData(gridConstants_1.WALL);
    }
    static isEnd(grid, queue, location) {
        if (location == undefined)
            return;
        const x = location[0];
        const y = location[1];
        if (grid[x][y].getData() == gridConstants_1.END) {
            return [x, y];
        }
        grid[x][y].setData(gridConstants_1.VISITED);
        queue.push(location);
        return;
    }
    static breadthFirstSearch(grid) {
        const startLocation = GridUtils.findNodeWithData(grid, gridConstants_1.START);
        if (startLocation == undefined) {
            console.log("Start node not set, exiting.");
            return;
        }
        const endLocation = GridUtils.findNodeWithData(grid, gridConstants_1.END);
        if (endLocation == undefined) {
            console.log("End node not set, exiting.");
            return;
        }
        let queue = [startLocation];
        let currentLocation = startLocation;
        let isEnd = GridUtils.makeMoves(grid, queue, currentLocation);
        if (isEnd != undefined) {
            const x = isEnd[0];
            const y = isEnd[1];
            console.log("found", isEnd);
            console.log(grid[x][y].getLast());
            return;
        }
        queue.shift();
        while (queue.length > 0) {
            currentLocation = queue[0];
            isEnd = GridUtils.makeMoves(grid, queue, currentLocation);
            if (isEnd != undefined) {
                const x = isEnd[0];
                const y = isEnd[1];
                // console.log(x, y)
                let locationArray = GridUtils.traverseNodes(grid, [x, y]);
                console.log(locationArray);
                return;
            }
            queue.shift();
        }
    }
    static makeMoves(grid, queue, location) {
        const up = GridUtils.isEnd(grid, queue, move_1.default.up(grid, location));
        const down = GridUtils.isEnd(grid, queue, move_1.default.down(grid, location));
        const left = GridUtils.isEnd(grid, queue, move_1.default.left(grid, location));
        const right = GridUtils.isEnd(grid, queue, move_1.default.right(grid, location));
        if (up != undefined)
            return up;
        if (down != undefined)
            return down;
        if (left != undefined)
            return left;
        if (right != undefined)
            return right;
    }
    static traverseNodes(grid, startLocation) {
        let locationArray = [startLocation];
        let x = startLocation[0];
        let y = startLocation[1];
        let currentNode = grid[x][y];
        let nextLocation = currentNode.getLast();
        while (nextLocation != undefined) {
            locationArray.push(nextLocation);
            let newX = nextLocation[0];
            let newY = nextLocation[1];
            let currentNode = grid[newX][newY];
            nextLocation = currentNode.getLast();
        }
        return locationArray;
    }
    static generateGridRow(xSize) {
        let row = [];
        for (let i = 0; i < xSize; i++)
            row.push(new gridNode_1.default(gridConstants_1.UNVISITED));
        return row;
    }
    static findNodeWithData(grid, data) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j].getData() == data) {
                    return [i, j];
                }
            }
        }
    }
}
exports.default = GridUtils;
