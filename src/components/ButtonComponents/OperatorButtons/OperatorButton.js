import React from "react";

const OperatorButton = ({btn}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button>{btn}</button>
    </>
  );
};

export default OperatorButton;