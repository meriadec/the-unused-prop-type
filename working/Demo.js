import React from "react";
import PropTypes from "prop-types";

const Demo = props => {
  return <div>{props.foo}</div>;
};

Demo.propTypes = {
  foo: PropTypes.string,
  bar: PropTypes.string // <-- unused prop
};

export default Demo;
