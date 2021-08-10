import React from "react";

type ColorProps = {
  hexCode: string;
  height: string;
  width: string;
};

const Color: React.FC<ColorProps> = ({ hexCode, height, width }) => {
  return <div style={{ backgroundColor: hexCode, height, width }} />;
};

export default Color;
