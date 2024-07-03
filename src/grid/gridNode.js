"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GridNode {
    constructor(data) {
        this._data = data;
    }
    getData() {
        return this._data;
    }
    setData(data) {
        this._data = data;
    }
    getLast() {
        return this._last;
    }
    setLast(next) {
        return (this._last = next);
    }
}
exports.default = GridNode;
