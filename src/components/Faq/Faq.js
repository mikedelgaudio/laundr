import "./Faq.css";

function Faq() {
  return (
    <div className="faq-container">
      <div className="faq-heading">
        <h1 className="faq-title">FAQs</h1>
        <p className="faq-subtitle">
          We've compiled a list of frequently asked questions. Check it out!
        </p>
      </div>

      <div className="faq-item">
        <p className="faq-question">
          Will you roll out Laundr to other colleges?
        </p>
        <p className="faq-answer">
          At this time, we are running a pilot of Laundr for Stevens students
          only. However be sure to stay tuned!
        </p>
      </div>

      <div className="faq-item">
        <p className="faq-question">
          My washer or dryer page has invalid information, how can I report
          this?
        </p>
        <p className="faq-answer">
          To report invalid information, please click the Report Issue button on
          the washer and dryer page.
        </p>
      </div>

      <div className="faq-item">
        <p className="faq-question">How accurate is Laundr?</p>
        <p className="faq-answer">
          Laundr aims to be a centralized application for all Stevens students
          to maintain the validity of the information.
        </p>
      </div>
    </div>
  );
}

export default Faq;
