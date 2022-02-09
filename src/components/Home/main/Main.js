import React from "react";
import "./main.scss";
const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="productivity">
          <h1 className="productivity_title">
            An online Pomodoro Timer to boost your productivity
          </h1>
        </div>
        <div className="pomofocus">
          <h2>What is Pomofocus?</h2>
          <p>
            Pomofocus is a customizable pomodoro timer that works on desktop &
            mobile browser. The aim of this app is to help you focus on any task
            you are working on, such as study, writing, or coding. This app is
            inspired by
            <span>
              <a
                href="https://francescocirillo.com/pages/pomodoro-technique"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pomodoro Technique
              </a>
            </span>
            which is a time management method developed by Francesco Cirillo.
          </p>
        </div>
        <div className="technique">
          <h2>What is Pomodoro Technique?</h2>
          <p>
            The Pomodoro Technique is created by Francesco Cirillo for a more
            productive way to work and study. The technique uses a timer to
            break down work into intervals, traditionally 25 minutes in length,
            separated by short breaks. Each interval is known as a pomodoro,
            from the Italian word for 'tomato', after the tomato-shaped kitchen
            timer that Cirillo used as a university student. -
            <span>
              <a
                href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia
              </a>
            </span>
          </p>
        </div>
        <div className="timer">
          <h2>How to use the Pomodoro Timer?</h2>
          <ol>
            <li>
              <strong>Add tasks</strong> to work on today
            </li>
            <li>
              <strong>Set estimate pomodoros</strong> (1 = 25min of work) for
              each tasks
            </li>
            <li>
              <strong>Select a task</strong> to work on
            </li>
            <li>
              <strong>Start timer</strong> and focus on the task for 25 minutes
            </li>
            <li>
              <strong>Take a break</strong> for 5 minutes when the alarm ring
            </li>
            <li>
              <strong>Iterate</strong> 3-5 until you finish the tasks
            </li>
          </ol>
        </div>
        <div className="features">
          <h2>Features</h2>
          <ul className="features__list">
            <li>
              <strong>Responsive design</strong> that works with desktop and
              mobile
            </li>
            <li>
              <strong>Color transition</strong> to switch moods between work
              time and rest time
            </li>
            <li>
              <strong>Audio notification</strong> at the end of a timer period
            </li>
            <li>
              <strong>Customizable timer</strong> intervals to suit your
              preference
            </li>
          </ul>
        </div>
        <div className="download">
          <h2>Download App</h2>
          <ul className="features__list">
            <li>
              <a href="/downloadable/pomofocus-darwin-x64-1.1.0.zip" download>
                For macOS
              </a>
              (zip file)
            </li>
            <li>
              <a href="/downloadable/pomofocus-1.1.0 Setup.exe" download>
                For Windows
              </a>
              (exe file)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;
