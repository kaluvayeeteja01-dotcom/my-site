import profile from "../photo.jpeg";

function Home() {
  return (
    <div className="container">
      <h1>About Me</h1>

      <img
        src={profile}
        alt="profile"
        className="profile"
      />

      <p>
        I am a Computer Science student passionate about Artificial Intelligence,
        Machine Learning, and Web Development. I enjoy building real-world projects
        and solving challenging problems.
      </p>

      <h2>Career Objective</h2>
      <p>
        To become a skilled software engineer and work on innovative technologies
        that create real-world impact.
      </p>

      <h2>Research Interests</h2>
      <ul>
        <li>Artificial Intelligence</li>
        <li>Machine Learning</li>
        <li>Data Science</li>
        <li>Cloud Computing</li>
      </ul>

      <h2>Education</h2>
      <p>B.Tech in Computer Science Engineering (2nd Year)</p>
      <p>Your College Name</p>

      <h2>Personal Details</h2>
      <p>Name: TEJA SAI BHARGAV REDDY</p>
      <p>Phone: 9876543210</p>
      <p>Email: kaluvayeeteja01@gmail.com</p>
      <p>College Email: se23ucse221@mahindrsuniversity.edu.in</p>

      <h2>Skills</h2>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>React</li>
        <li>Machine Learning</li>
      </ul>

      <h2>Certifications</h2>
      <ul>
        <li>Introduction to Artificial Intelligence</li>
        <li>Python for Data Science</li>
      </ul>

      <h2>Achievements</h2>
      <ul>
        <li>Completed multiple academic projects</li>
        <li>Participated in technical events</li>
      </ul>

      <h2>Contact</h2>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/kaluvayeeteja01-dotcom?tab=projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </a>
      </p>

    </div>
  );
}

export default Home;