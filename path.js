const getpath = (matrix) => {

    let m = matrix.length;
    let n = matrix[0].length;
    let count = 0;
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));

    //init columns. Path can only go through 0 cells value
    for (let i = 0; i < m; i++) {
        result[i][0] = 1;
    }

    for (let i = 0; i < n; i++) {
        result[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] == 0) {
                result[i][j] = 0;
            } else {
                let left = result[i - 1][j];
                let up = result[i][j - 1];
                console.log(left, up);
                result[i][j] = result[i - 1][j] + result[i][j - 1];
            }
        }
    }

    console.log(matrix);
    console.log(result);
    return result[m - 1][n - 1];
}


let matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
console.log(getpath(matrix));