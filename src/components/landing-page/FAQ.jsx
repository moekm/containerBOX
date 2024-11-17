import faqQuestions from "./static/FAQ.js";

export default function FAQ() {
  return faqQuestions.map((question) => (
    <FAQCard key={question[0]} title={question[0]} content={question[1]} />
  ));
}

function FAQCard({ title, content }) {
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
