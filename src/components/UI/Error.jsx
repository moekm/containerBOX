export default function Error({ title, message }) {
  return (
    <div id="error">
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}
