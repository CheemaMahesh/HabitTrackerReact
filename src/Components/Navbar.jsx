import React, { useState } from "react"; // Import React and useState correctly
import Habits from "./Habits";
import { useValue } from "../HabitContext"; // Import useValue from the correct location
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [tHabit,setTHabit]=useState("");
  const { handleUpload} = useValue();

  // Define functions to handle the click events
  const handleAddHabitClick = () => {
    setIsClicked(true);
  };


  const handleCancel = (e) => {
    e.preventDefault(); // Correct the typo here
    setIsClicked(false);
  };
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    handleUpload(tHabit);
    setIsClicked(false);
    setTHabit("");
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.title}>
          <h1>HabiTracker</h1>
        </div>
        <div className={styles.addHabbit}>
          <h2 onClick={handleAddHabitClick}>Add Habit</h2>
          {isClicked ? (
            <form onSubmit={handleFormSubmit}>
              <input placeholder="Habit" value={tHabit} onChange={(e)=>setTHabit(e.target.value)}/>
              <button>Submit</button>
              <h6 onClick={handleCancel}>Cancel</h6> 
            </form>
          ) : null}
        </div>
      </div>
      <Habits />
    </>
  );
}
