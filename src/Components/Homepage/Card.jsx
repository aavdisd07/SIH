import profilepic from "../Assets/employe.jpg";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="header-content">
            <h2 className="card-title">Employee Details</h2>
            <div className="card-actions">
              <button className="card-button">This Year</button>
              <button className="card-button1">Download Info</button>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="employee-info">
            <img
              className="card-image"
              src={profilepic}
              alt="profile picture"
            />
            <div className="employee-details">
              <div className="employee-name-actions">
                <p className="employee-name">Sanika Narwade</p>
              </div>
              <div className="emp">
                <p className="employee-role">
                  Role: <br />
                  <b>Head of UI/UX Design</b>
                </p>
                <p className="employee-phone">
                  Phone Number: <br /> <b>(+62) 812 3456-7890</b>
                </p>
                <p className="employee-email">
                  Email Address: <br />
                  <b>sanika@gmail.com</b>
                </p>
              </div>
            </div>
          </div>
          <div className="card-stats">
            <div className="card-stat">
              <p className="card-stat-number">309</p>
              <p className="card-stat-text">Total Attendance</p>
            </div>
            <div className="card-stat">
              <p className="card-stat-number">08:46</p>
              <p className="card-stat-text">Avg Check-In Time</p>
            </div>
            <div className="card-stat">
              <p className="card-stat-number">17:04</p>
              <p className="card-stat-text">Avg Check-Out Time</p>
            </div>
            <div className="card-stat">
              <p className="card-stat-number">Role Model</p>
              <p className="card-stat-text">Employee Predictability</p>
            </div>
          </div>
        </div>
      </div>

      {/* // empolyee history */}

      <div className="history-card">
        <div className="history-card-header">
          <h2 className="history-title">Attendance History</h2>
          <div className="history-actions">
            <button className="history-btn">Sort</button>
            <button className="history-btn">Filter</button>
          </div>
        </div>

        <div className="history-card-content">
          <div className="history-stats">
            <div className="history-stat">
              <div className="history-stat-header">
                <p className="history-stat-number">March 08 2023</p>
                <button className="hist-btn">On Time</button>
              </div>

              <div className="history-stat-times">
                <p className="history-stat-text">
                  Check-in Time
                  <br />
                  <span className="highlight-time">08:53</span>
                </p>
                <p className="history-stat-text">
                  Check-out Time
                  <br />
                  <span className="highlight-time">17:15</span>
                </p>
              </div>
            </div>

            <div className="history-stat">
              <div className="history-stat-header">
                <p className="history-stat-number">March 08 2024</p>
                <button className="hist-btn">Late</button>
              </div>

              <div className="history-stat-times">
                <p className="history-stat-text">
                  Check-in Time
                  <br />
                  <span className="highlight-time">08:53</span>
                </p>
                <p className="history-stat-text">
                  Check-out Time
                  <br />
                  <span className="highlight-time">17:15</span>
                </p>
              </div>
            </div>

            <div className="history-stat">
              <div className="history-stat-header">
                <p className="history-stat-number">March 09 2024</p>
                <button className="hist-btn">Absent</button>
              </div>

              <div className="history-stat-times">
                <p className="history-stat-text">
                  Check-in Time
                  <br />
                  <span className="highlight-time">08:53</span>
                </p>
                <p className="history-stat-text">
                  Check-out Time
                  <br />
                  <span className="highlight-time">17:15</span>
                </p>
              </div>
            </div>

            <div className="history-stat">
              <div className="history-stat-header">
                <p className="history-stat-number">March 10 2024</p>
                <button className="hist-btn">Absent</button>
              </div>

              <div className="history-stat-times">
                <p className="history-stat-text">
                  Check-in Time
                  <br />
                  <span className="highlight-time">08:53</span>
                </p>
                <p className="history-stat-text">
                  Check-out Time
                  <br />
                  <span className="highlight-time">17:15</span>
                </p>
              </div>
            </div>

            <div className="history-stat">
              <div className="history-stat-header">
                <p className="history-stat-number">March 11 2024</p>
                <button className="hist-btn">Late</button>
              </div>

              <div className="history-stat-times">
                <p className="history-stat-text">
                  Check-in Time
                  <br />
                  <span className="highlight-time">08:53</span>
                </p>
                <p className="history-stat-text">
                  Check-out Time
                  <br />
                  <span className="highlight-time">17:15</span>
                </p>
              </div>
            </div>

            <div className="history-stat">
              <div className="history-stat-header">
                <p className="history-stat-number">March 12 2024</p>
                <button className="hist-btn">On Time</button>
              </div>

              <div className="history-stat-times">
                <p className="history-stat-text">
                  Check-in Time
                  <br />
                  <span className="highlight-time">08:53</span>
                </p>
                <p className="history-stat-text">
                  Check-out Time
                  <br />
                  <span className="highlight-time">17:15</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
