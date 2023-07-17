/**
 * A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.
 * Given a row x col grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).
 *
 * @param {number[][]} grid
 * @return {number}
 */

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function isMagicSquare(grid, start, end) {
  if (grid.length < 3 || grid[0].length < 3) {
    return false;
  }


  const diagonal1 = [];
  const diagonal2 = [];


  for (let i = start; i < end; i++) {
    const row = grid[i].slice(start, end);
    const column = [];


    for (let j = start; j < end; j++) {
      console.log(j, i);
      column.push(grid[j][i]);
    }
    diagonal1.push(grid[i][i]);
    diagonal2.push(grid[2 - i][i]);

    if (row.reduce(reducer) !== 15 || column.reduce(reducer) !== 15) {
      return false;
    }
  }


  if (diagonal1.reduce(reducer) !== 15 || diagonal2.reduce(reducer) !== 15) {
    return false;
  } else {
    return true;
  }
}

const numMagicSquaresInside = function(grid) {

  // console.log(grid[2]);
  let counter = 0;

  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid.length - 2; j++) {
      if (isMagicSquare(grid, i, j)) counter++;
    }
  }

  // for (let i = 0; i + 2 <= grid.length; i++) {
  //   const gridSection = grid.slice(i, i + 3).map((item) => item.slice(0, 3));
  //
  //   console.log(gridSection);
  //
  //   // console.log(i, i + 3);
  //   // const result = isMagicSquare(grid, i, i + 3);
  //   // if (result) {
  //   //   counter++;
  //   // }
  // }
  return counter;
};


console.log(numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]));

