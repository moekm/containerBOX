import { Link } from "react-router-dom";

import "../styling/error-pages.css";

export default function ErrorPage({ code, message }) {
  return (
    <section className="error">
      <h1 id="error-code">{code}</h1>
      <p id="error-details">{message}</p>
      <Link to={".."}>
        <button>Go Back</button>
      </Link>
    </section>
  );
}
