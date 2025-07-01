import Activity from "./Activity";
import VideoSection from "./VideoSection";

const ExerciseSchedule = () => {
  const activities = [
    {
      name: "Chin tucks (posture correction)",
      timing: "Morning + Evening",
      details: "10 reps x 2 sets",
      videoUrl: "https://www.youtube.com/embed/example1",
    },
    {
      name: "Shoulder retraction",
      timing: "Morning + Evening",
      details: "10 reps x 2 sets",
      videoUrl: "https://www.youtube.com/embed/example2",
    },
    {
      name: "Upper trunk rotation (sitting)",
      timing: "Morning + Evening",
      details: "10 reps each side",
      videoUrl: "https://www.youtube.com/embed/example3",
    },
    {
      name: "Lower trunk rotation (lying down)",
      timing: "Morning + Evening",
      details: "10 reps each side",
      videoUrl: "https://www.youtube.com/embed/example4",
    },
    {
      name: "Trapezius & levator scapula stretch",
      timing: "After exercise sets",
      details: "Hold 20 sec x 2",
      videoUrl: "https://www.youtube.com/embed/example5",
    },
    {
      name: "Piriformis & hamstring stretch",
      timing: "After exercise sets",
      details: "Hold 20 sec x 2",
      videoUrl: "https://www.youtube.com/embed/example6",
    },
    {
      name: "Calf stretch",
      timing: "After walking",
      details: "Hold 20 sec x 2",
      videoUrl: "https://www.youtube.com/embed/example7",
    },
    {
      name: "Spinal extension (lying prone)",
      timing: "Morning + Evening",
      details: "10 reps",
      videoUrl: "https://www.youtube.com/embed/example8",
    },
    {
      name: "Static quadriceps (with towel/roll)",
      timing: "Any time during rest",
      details: "Hold 5 sec x 10",
      videoUrl: "https://www.youtube.com/embed/example9",
    },
    {
      name: "SLR (Straight Leg Raise)",
      timing: "Morning + Evening",
      details: "10 reps each leg",
      videoUrl: "https://www.youtube.com/embed/example10",
    },
    {
      name: "VMO strength with ball/pillow",
      timing: "Morning + Evening",
      details: "10 reps x 2 sets",
      videoUrl: "https://www.youtube.com/embed/example11",
    },
    {
      name: "Active knee extension (sitting)",
      timing: "Morning + Evening",
      details: "10 reps each leg",
      videoUrl: "https://www.youtube.com/embed/example12",
    },
    {
      name: "Knee to chest in sitting",
      timing: "Evening or post-walk",
      details: "10 reps",
      videoUrl: "https://www.youtube.com/embed/example13",
    },
    {
      name: "Hot water bag on lower back",
      timing: "Night or after exercise",
      details: "15 minutes",
      videoUrl: "https://www.youtube.com/embed/example14",
    },
    {
      name: "Walk gently indoors",
      timing: "2–3 times daily",
      details: "5–10 minutes",
      videoUrl: "https://www.youtube.com/embed/example15",
    },
    {
      name: "Avoid sitting >30 mins straight",
      timing: "Throughout the day",
      details: "Get up every 30 mins",
      videoUrl: "https://www.youtube.com/embed/example16",
    },
  ];

  return (
    <div>
      {activities.map((activity, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <Activity
            name={activity.name}
            timing={activity.timing}
            details={activity.details}
          />
          <VideoSection videoLink={activity.videoUrl} />
        </div>
      ))}
    </div>
  );
};

export default ExerciseSchedule;
