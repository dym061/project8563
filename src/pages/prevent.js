import React, { useEffect } from "react";

const Prevent = () => {
  useEffect(() => {
    const preventEditing = (event) => {
      event.preventDefault();
      return false;
    };

    document.addEventListener("contextmenu", preventEditing);

    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
        preventEditing(event);
      }
    });
  }, []);

  return null;
};

export default Prevent;