import React from "react";

const OperatorButton = ({operatorButton}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button>{operatorButton}</button>
    </>
  );
};

export default OperatorButton;