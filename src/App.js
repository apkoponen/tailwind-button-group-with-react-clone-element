import React from "react";
import classnames from "classnames";

const ButtonGroup = ({ children }) => {
  return (
    <span className="relative z-0 inline-flex shadow-sm">
      {children.map(child =>
        React.cloneElement(child, {
          className: classnames(
            "-ml-px first:ml-auto rounded-r-none rounded-l-none first:rounded-l-md last:rounded-r-md",
            child.props.className
          )
        })
      )}
    </span>
  );
};

const Button = ({ children, className }) => {
  return (
    <button
      className={classnames(
        "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 rounded-md",
        className
      )}
      type="button"
    >
      {children}
    </button>
  );
};

function ButtonGroupExample() {
  return (
    <>
      <Button>Single</Button>{" "}
      <ButtonGroup>
        <Button>Years</Button>
        <Button>Months</Button>
        <Button>Years</Button>
      </ButtonGroup>
    </>
  );
}

export default ButtonGroupExample;
