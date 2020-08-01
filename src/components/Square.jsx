import React from "react";

const Square = function (props) {
  // console.log(props);
  return (
    <td onClick={props.handleClick} value={props.coordinates}>
      <div onClick={props.handleClick} value={props.coordinates}>
        {props.square}
      </div>
    </td>
  );
};

export default Square;
