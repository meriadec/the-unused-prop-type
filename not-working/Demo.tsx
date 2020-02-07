import React from "react";

type Props = {
  foo: string;
  bar: string; // <-- unused prop
};

const Demo = (props: Props): React.ReactNode => {
  return <div>{props.foo}</div>;
};

export default Demo;
