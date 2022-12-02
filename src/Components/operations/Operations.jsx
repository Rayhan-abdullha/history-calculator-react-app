import React from "react";
import Button from "../ui/Button";
import PropTypes from "prop-types";

export default function Operations({disableArth, handleClearOps, handleArithmeticOps}) {
  const operationData = [
    {
      id: 1,
      operation: "+",
      onClick: () => handleArithmeticOps("+")
    },
    {
        id: 2,
        operation: "-",
        onClick: () => handleArithmeticOps("-")
      },
      {
        id: 3,
        operation: "*",
        onClick: () => handleArithmeticOps("*")
      },
      {
        id: 4,
        operation: "/",
        onClick: () => handleArithmeticOps("/")
      },
      {
        id: 6,
        operation: "%",
        onClick: () => handleArithmeticOps("/")
      },
      {
        id: 5,
        operation: "clear",
        onClick: handleClearOps
      },
  ];
  return (
    <div>
        {
            operationData.map(item => (
                <Button key={item.id} onClick={item.onClick} disableArth={disableArth} name={item.operation}/>
            ))
        }
    </div>
  );
}

Operations.propTypes = {
    handleClearOps: PropTypes.func.isRequired,
    handleArithmeticOps: PropTypes.func.isRequired
}