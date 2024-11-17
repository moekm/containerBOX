import { Link } from "react-router-dom";

export default function Button({ children, to, href, ...props }) {
  if (to) {
    return (
      <Link to={to}>
        <button {...props}>{children}</button>
      </Link>
    );
  }

  return (
    <a href={href}>
      <button {...props}>{children}</button>
    </a>
  );
}
