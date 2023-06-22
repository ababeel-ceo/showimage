const React = require("react");

const ImageContainer = ({ lnk }) => {
  return React.createElement("img", { src: lnk, alt: "No Image Found" });
};

module.exports = ImageContainer;
