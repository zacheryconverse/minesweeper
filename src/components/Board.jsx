import React from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
        [
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
          ["+"],
        ],
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('boom!');
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
                handleClick={
                  this.handleClick
                }
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
