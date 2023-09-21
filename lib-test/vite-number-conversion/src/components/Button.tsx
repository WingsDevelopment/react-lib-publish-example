import React from "react";

interface Props {
  test: string;
}

export const Button: React.FC<Props> = ({ test }) => {
  return <button>Button {test} </button>;
};
