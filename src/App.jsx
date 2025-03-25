import React from "react";
import TeamMember from "./components/TeamMemberCard.jsx";
import "./components/TeamMember.css";
import "./App.css";
function App() {
  return (
    <>
      <TeamMember name="John Doe" job="Software Engineer" />
      <TeamMember name="Harley Davidson" job="Chef" />
    </>
  );
}

export default App;
