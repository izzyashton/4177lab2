import "../styles/launch.css";

function Launch() {
  return (
    <section className="launch">
      <span className="badge">Launching in Halifax, Nova Scotia</span>

      <h1>
        Know what you're <br />
        signing before <br />
        you sign it.
      </h1>

      <p>
        Read honest reviews from past tenants. See AI-generated summaries.
        Make informed decisions about where you live.
      </p>

      <div className="launch-buttons">
        <button className="primary-btn">Create Free Account</button>
        <button className="secondary-btn">Sign In</button>
      </div>

      <div className="features">
        <div className="feature">
          ⭐
          <h4>Verified Reviews</h4>
          <p>Real ratings with photos and videos from past tenants.</p>
        </div>

        <div className="feature">
          🤖
          <h4>AI Summaries</h4>
          <p>Key issues and sentiment extracted from every review.</p>
        </div>

        <div className="feature">
          💬
          <h4>Ask Questions</h4>
          <p>Comment on reviews and get answers from past tenants.</p>
        </div>
      </div>
    </section>
  );
}

export default Launch;