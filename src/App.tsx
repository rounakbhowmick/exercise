import "./App.css";
import VideoSection from "./components/VideoSection";
import ExerciseSchedule from "./components/ExerciseSchedule";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Exercise for Spondylosis</h1>
      <p style={{ textAlign: "center" }}>
        Below is a helpful video for exercises to manage spondylosis. Please
        watch and follow along.
      </p>
      <VideoSection videoLink="https://www.youtube.com/embed/dQw4w9WgXcQ" />
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        Exercise Schedule
      </h2>
      <ExerciseSchedule />
    </div>
  );
}

export default App;
