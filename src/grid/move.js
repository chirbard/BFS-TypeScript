"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gridConstants_1 = require("./gridConstants");
class Move {
    static up(grid, start) {
        const x = start[0];
        const y = start[1] - 1;
        return Move._validateAndSetVisited(grid, x, y, start);
    }
    static down(grid, start) {
        const x = start[0];
        const y = start[1] + 1;
        return Move._validateAndSetVisited(grid, x, y, start);
    }
    static left(grid, start) {
        const x = start[0] - 1;
        const y = start[1];
        return Move._validateAndSetVisited(grid, x, y, start);
    }
    static right(grid, start) {
        const x = start[0] + 1;
        const y = start[1];
        return Move._validateAndSetVisited(grid, x, y, start);
    }
    static _setLastNode(grid, x, y, lastLocation) {
        grid[x][y].setLast(lastLocation);
    }
    static _validateLocation(grid, x, y) {
        const ISONGRIDY = y >= 0 && y < grid.length;
        const ISONGRIDX = x >= 0 && x < grid[0].length;
        if (ISONGRIDY && ISONGRIDX) {
            const ISUNVISITED = grid[x][y].getData() == gridConstants_1.UNVISITED;
            const ISEND = grid[x][y].getData() == gridConstants_1.END;
            if (ISUNVISITED || ISEND) {
                return [x, y];
            }
        }
    }
    static _validateAndSetVisited(grid, x, y, lastLocation) {
        const newLocation = Move._validateLocation(grid, x, y);
        if (newLocation != undefined) {
            Move._setLastNode(grid, x, y, lastLocation);
            return newLocation;
        }
    }
}
exports.default = Move;
