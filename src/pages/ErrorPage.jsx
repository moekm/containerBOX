import { useRouteError } from "react-router-dom";
import Button from "../components/UI/Button";

import "../styles/error-pages.css";

export default function ErrorPage() {
  const { status, statusText, ...error } = useRouteError();

  console.error(error);

  return (
    <section className="error">
      <h1 id="error-code">{status}</h1>
      <p id="error-details">{statusText}</p>
      <Button to="..">Go Back</Button>
    </section>
  );
}
