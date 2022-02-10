import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
export const Header = () => {
  const [bool, setBool] = useState(true);

  const [colors, setColors] = useState("");

  const [minuts, setMinuts] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [count, setCount] = useState(0);
  const styles = {
    color: colors,
    background: colors,
  };

  const [time, setTime] = useState(minuts * 60);

  const changeColor = (value) => {
    setBool(true);
    if (value === 1) {
      setColors("rgb(217, 85, 80)");
      setMinuts(25);
      setTime(25 * 60);
      setSeconds(0);
    } else if (value === 2) {
      setColors("rgb(76, 145, 149)");
      setMinuts(5);
      setTime(5 * 60);
      setSeconds(0);
    } else if (value === 3) {
      setColors("rgb(69, 124, 163)");
      setMinuts(15);
      setTime(15 * 60);
      setSeconds(0);
    } else setColors("rgb(217, 85, 80)");
  };

  const countdownFunc = () => {
    setBool(!bool);
  };

  useEffect(() => {
    console.log(count);
    if (!bool) {
      setMinuts(Math.floor(time / 60));
      setSeconds(time % 60);
      setTime(time - 1);
    }

    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    
    // eslint-disable-next-line
  }, [count]);

  return (
    <div className="header" style={{ background: styles.background }}>
      <div className="container">
        <nav>
          <Link to="/app" className="logo">
            <img src="https://pomofocus.io/icons/icon-white.png" alt="logo" />
            Pomofocus
          </Link>
          <div className="nav_right">
            <button>
              <img src="https://pomofocus.io/icons/graph-white.png" alt="img" />
              <span>Report</span>
            </button>
            <button>
              <img
                src="	https://pomofocus.io/icons/config-white.png"
                alt="img"
              />
              <span>Setting</span>
            </button>
            <div className="login">
              <button>
                <img
                  src="https://pomofocus.io/icons/user-white.png"
                  alt="img"
                />
                <span>Login</span>
              </button>
            </div>
          </div>
        </nav>
        <div className="clock">
          <div className="line">
            <div className="over_line"></div>
          </div>
          <div className="alarm_clock">
            <div className="alarm">
              <div className="sort_clock">
                <button
                  className={colors === "rgb(217, 85, 80)" ? "active" : ""}
                  onClick={() => changeColor(1)}
                >
                  Pomodoro
                </button>
                <button
                  className={colors === "rgb(76, 145, 149)" ? "active" : ""}
                  onClick={() => changeColor(2)}
                >
                  Short Break
                </button>
                <button
                  className={colors === "rgb(69, 124, 163)" ? "active" : ""}
                  onClick={() => changeColor(3)}
                >
                  Long Break
                </button>
              </div>
              <div className="timer">
                {minuts > 9 ? minuts : "0" + minuts}:
                {seconds > 9 ? seconds : "0" + seconds}
              </div>
              <div className="start">
                <button
                  className={bool ? "start_button" : "stop_button"}
                  style={{ color: styles.color }}
                  onClick={countdownFunc}
                >
                  {bool ? "START" : "STOP"}
                </button>
                <div className="rest">
                  {bool ? (
                    " "
                  ) : (
                    <button className="rest_button">
                      <img
                        src="https://pomofocus.io/icons/next-white3.png"
                        alt="img"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="raqam">#1</div>
            <div className="focus">
              <span>
                {minuts === 25 ? "Time to focus!" : "Time for a break!"}
              </span>
            </div>
          </div>
          <div className="task">
            <div className="tasks">
              <span>Tasks</span>
              <div className="dropBtn">
                <button className="btn">
                  <img
                    src="	https://pomofocus.io/icons/threedots-white.png"
                    alt="img"
                  />
                </button>
              </div>
            </div>
            <div className="block"></div>
            <div className="add_task">
              <img
                src="https://pomofocus.io/icons/plus-circle-white.png"
                alt="img"
              />
              <div className="text_task">Add Task</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
