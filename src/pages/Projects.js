function Projects() {
  return (
    <div className="container">
      <h1>My Projects</h1>

      <div className="card">
        <h3>Student Performance Predictor</h3>
        <p>ML model using ID3, C4.5, CART</p>
        <a href="https://github.com/your-username/project1" target="_blank">
          View Project
        </a>
      </div>

      <div className="card">
        <h3>Credit Risk Prediction</h3>
        <p>Hybrid regression-classification model</p>
        <a href="https://github.com/your-username/project2" target="_blank">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Projects;