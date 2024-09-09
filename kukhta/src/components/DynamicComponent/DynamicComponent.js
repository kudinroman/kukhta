import React from "react";
import content from "../content";

const DynamicComponent = ({ componentName }) => {
  const Component = content[componentName];
  return Component ? (
    React.createElement(Component)
  ) : (
    <p>Component not found</p>
  );
};

export default DynamicComponent;
