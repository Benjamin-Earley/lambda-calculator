import React from "react";

const NumberButton = ({numberButton}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{numberButton}</button>
    </>
  );
};

export default NumberButton;