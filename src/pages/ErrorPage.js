import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Error</h1>
      <Link className="btn btn-primary" to="/">
        Go back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
