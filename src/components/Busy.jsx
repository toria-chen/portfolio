import busyb from "../assets/5.png";
import goal from "../assets/goal.png";
import task from "../assets/task.png";
import garden from "../assets/garden.png";

function Busy() {
  return (
    <section className="case-study">
      <h2><span className="colorchange">busy.b: A Plant-Themed Productivity Web App</span></h2>
       <section className="case-section">
        <h2>Overview</h2>
        <img src={busyb} alt="busy.b" />
        <h3>
          ✦ <a href="https://github.com/toria-chen/busy.b/blob/main/README.md">busy.b</a> is an online productivity tracker built using Flask, HTML and CSS<br></br><br></br>
          ✦ All artwork was hand-drawn by myself in <span className="highlight">Adobe Fresco</span>, to create a visually appealing, plant-themed and pixel art style
            <br></br><br></br> ✦ <span className="highlight">Skills + Tools:</span> Digital Illustration, Flask, JavaScript, HTML/CSS
        </h3>
      </section>
      <section className="case-section">
        <h2>Adding Goals</h2>
        <img src={goal} alt="Goal Addition" />

        <h3>
         ✦ busy.b was built with the purpose of encouraging users to <span className="highlight">break down goals</span> into feasible subtasks<br></br><br></br>
         ✦ I created a <span className="highlight">clean, intuitive interface</span> with cheerful colors and stylized artwork to increase the cohesiveness of the product
        </h3>

      </section>

      <section className="case-section">
        <h2>Completing Subtasks</h2>
        <img src={task} alt="Task Completion" />

        <h3>
         ✦ As each subtask is completed, a <span className="highlight">digital plant</span> "grows" from a seed to a sprout to a blooming plant, validating the user's progress<br></br><br></br>
         ✦ Updates are <span className="highlight">synchronized</span> in real-time with the garden page, so users can come back to partially-completed tasks at a later time
        </h3>

      </section>

      <section className="case-section">
        <h2>Viewing Garden</h2>
        <img src={garden} alt="Garden Design" />
        <h3>
         ✦ The garden provides a <span className="highlight">visual indicator</span> of the user's progress, and includes every previously logged goal and subtask (with progress indicated by plant stage)<br></br><br></br>
         ✦ Special effects such as rain are also available, to enhance the <span className="highlight">gamified style</span> of the user's experience<br></br>
         </h3>

      </section>
    </section>
  );
}

export default Busy;
