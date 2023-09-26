import React from "react";
import styles from "./Habits.module.css";
import { useValue } from "../HabitContext";

export default function Habits() {
  const { habits,deleteHabbit } = useValue();

  return (
    <div className={styles.Habits}>
      {habits.map((habit,i) => (
       <div key={i}> <label key={habit.id} className={styles.HabitLabel}>
       <input type="checkbox" className={styles.HabitCheckbox} />
       {habit.title}
     </label>
     <button onClick={()=>deleteHabbit(habit.id)}>DELETE</button>
       </div>

      ))}
    </div>
  );
}
