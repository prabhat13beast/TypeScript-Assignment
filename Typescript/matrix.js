var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
function printDiagonal(matrix) {
    for (var r = 0; r < matrix.length; ++r) {
        var j = void 0;
        for (var i = r, j_1 = 0; j_1 < matrix.length && i >= 0; i--, j_1++) {
            console.log("Matrix Diagonal " + matrix[i][j_1]);
        }
    }
}
printDiagonal(matrix);
