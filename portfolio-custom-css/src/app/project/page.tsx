import React from "react";

function Projects() {
  return (
    <div className="projects">
      <h2 className="heading">My Projects</h2>
      <div className="cardContainer">
        <div className="card">
          <h3>Travel Website</h3>
          <p>A Multi Page Website</p>
          <div className="box1"> Next.js and Custom-CSS</div>
          <a
            href="https://nextjs-website1-customcss.vercel.app/"
            target="_blank"
            className="button">
            View Project
          </a>
        </div>
        <div className="card">
          <h3>E-Commerce Website</h3>
          <p>An E-Commerce Website</p>
          <div className="box1">Next.js and Tailwind CSS</div>
          <a
            href="https://nextjs15-figma-hackathon-2.vercel.app/"
            className="button"
            target="_blank">
            View Project
          </a>
        </div>
        <div className="card">
          <h3>Resume Builder</h3>
          <p>A Dynamic Resume Builder</p>
          <div className="box1">HTML, CSS, TypeScript</div>
          <a
            href="https://milestone-5-olive.vercel.app/"
            className="button"
            target="_blank">
            View Project
          </a>
        </div>
      </div>

      <div className="cardContainer">
        <div className="card">
          <h3>Quiz App</h3>
          <p>A Quiz App With Timer </p>
          <div className="box1">HTML, CSS, JavaScript</div>

          <a
            href="https://faiza-js-quiz-app.netlify.app/"
            target="_blank"
            className="button">
            View Project
          </a>
        </div>
        <div className="card">
          <h3>Digital Clock</h3>
          <p>A Digital Clock App with Days</p>
          <div className="box1">HTML, CSS, JavaScript</div>
          <a
            href="https://faiza-kanwal-js-digital-clock.netlify.app/"
            className="button"
            target="_blank">
            View Project
          </a>
        </div>
        <div className="card">
          <h3>Todo List App</h3>
          <p>A Todo App with add, delete and edit</p>
          <div className="box1">HTML, CSS, JavaScript</div>
          <a
            href="https://faiza-kanwal-js-todolist-app.netlify.app/"
            className="button"
            target="_blank">
            View Project
          </a>
        </div>
      </div>

      <div className="cardContainer">
        <div className="card">
          <h3>Calculator App</h3>
          <p>A Calculator App perform simpe task</p>
          <div className="box1"> HTML, CSS, JavaScript </div>
          <a
            href="https://faiza-kanwal-js-calculator.netlify.app/"
            target="_blank"
            className="button">
            View Project
          </a>
        </div>
        <div className="card">
          <h3>UI/UX Portfolio</h3>
          <p>A Portfolio with UI/UX Design </p>
          <div className="box1">HTML and CSS</div>
          <a
            href="https://faiza-responsive-portfolio-htmlcss.netlify.app/"
            className="button"
            target="_blank">
            View Project
          </a>
        </div>
        <div className="card">
          <h3>UI/UX Design</h3>
          <p>A UI/UX Figma Design</p>
          <div className="box1">HTML and CSS</div>
          <a
            href="https://faiza-kanwal-hackathon1-htmlcss.netlify.app/"
            className="button"
            target="_blank">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
