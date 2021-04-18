import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const sizeMap = {
  small: "px-4 text-sm",
  large: "px-7 py-1",
};

const variantMap = {
  red: "bg-red-400 hover:bg-red-200 text-red-100",
  yellow: "bg-yellow-400 hover:bg-yellow-200 text-yellow-900",
  purple: "bg-purple-600 hover:bg-purple-300 text-purple-50",
};

const Button = (props) => {
  const { content, variant, size } = props;
  return (
    <button
      className={classNames(
        "border-0 rounded-lg font-bold",
        variantMap[variant],
        sizeMap[size]
      )}
    >
      {content}
    </button>
  );
};

Button.variant = variantMap;
Button.size = sizeMap;

Button.propTypes = {
  variant: PropTypes.string,
  sizeMap: PropTypes.string,
  content: PropTypes.string,
};

export default Button;
