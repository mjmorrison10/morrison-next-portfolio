import React from "react";

function capWords(arr) {
  return arr.map((element) => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
  });
}

export default capWords;
