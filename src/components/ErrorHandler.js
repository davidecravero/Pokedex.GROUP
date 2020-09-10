import React from "react";
import "./../css/ErrorHandler.css";

// Centralized Error Handling, displaying error and console.log error message
const ErrorHandler = ({ errorMessage }) => {
  console.log(errorMessage);
  return (
    <div id="errorWrapper">
      <div id="error">There has been an Error</div>
    </div>
  );
};

export default ErrorHandler;
