const React = require("react");
const ImageContainer = require("./ImageContainer");

function ShowImages(link) {
  return React.createElement(
    ImageContainer,
    { lnk: link },
    null
  );
}

module.exports = ShowImages;
