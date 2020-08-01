import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        [["O"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
        [["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
        [["O"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
        [["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
        [["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
        [["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
        [["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
        [["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
        [["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
        [["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"], ["+"]],
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.getPerimeter = this.getPerimeter.bind(this);
    this.isBomb = this.isBomb.bind(this);
  }

  isBomb(x, y) {
    // console.log(this.state.squares[x][y]);
    if (this.state.squares[x][y] == "O") {
      console.log("it is a bomb!");
      return true;
    } else {
      console.log("miss");
      return false;
    }
  }

  getPerimeter(x, y) {
    // define a count variable
    let count = 0;
    if (!this.isBomb(x, y)) {
      // console.log(this.isBomb(x, y));
      for (let i = x - 1; i <= x + 1; i++) {
        console.log(`i is ${i}`);
        // test (x - 1), (y - 1); (x - 1), (y - 0), (x-1), (y+1)
        if (i > -1 && i < 10 ) {
          for (let j = y - 1; j <= y + 1; j++) {
            console.log(`j is ${j}`);
            console.log('i, j', this.state.squares[i][j]);
            if (this.isBomb(i, j)) {
              console.log('hit')
              count++;
            }
          }
        }
      }
    }
    console.log("count", count);
    return count;
  }

  handleClick(x, y) {
    // e.preventDefault();
    // console.log("boom!");
    console.log(x, y);
    this.isBomb(x, y);
    this.getPerimeter(x, y);
    // if (x === 0 && y === 0) {
    //   console.log('boom!');
    // } else {
    // }
  }

  render() {
    const rows = this.state.squares.map((row, i) => {
      return (
        <tr key={"row_" + i}>
          {row.map((square, j) => {
            return (
              <Square
                square={square}
                key={i + "_" + j}
                handleClick={() => {
                  this.handleClick(i, j);
                }}
              />
            );
          })}
        </tr>
      );
    });
    return (
      <div>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
