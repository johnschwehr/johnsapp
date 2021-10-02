import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";

export const Base = () => {
  const { theme } = useContext(ThemeContext);

  return <div>This is base</div>;
};
