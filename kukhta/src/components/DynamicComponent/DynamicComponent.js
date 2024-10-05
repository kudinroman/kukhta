import React from "react";
import content from "../content";

const DynamicComponent = ({ componentName }) => {
  const Component = content[componentName];
  return Component ? (
    <div className="lg:w-3/4 container">{React.createElement(Component)}</div>
  ) : (
    <p>Component not found: {componentName}</p>
  );
};

export default DynamicComponent;
