export default function FAQ({ title, content }) {
  return (
    <div id="card-container">
      <details>
        <summary>
          <span>{title}</span>
        </summary>
      </details>
      <div id="details-content">
        <p>{content}</p>
      </div>
    </div>
  );
}
