import React from "react";

const Square = function (props) {
  return (
    <td onClick={props.handleClick}>
      <div >
        {props.square}
      </div>
    </td>
  );
};

export default Square;
