import React from "react";
import styles from "./Habits.module.css";
import { useValue } from "../HabitContext";

export default function Habits() {
  const { habits } = useValue();

  return (
    <div className={styles.Habits}>
      {habits.map((habit) => (
        <label key={habit.id} className={styles.HabitLabel}>
          <input type="checkbox" className={styles.HabitCheckbox} />
          {habit.title}
        </label>
      ))}
    </div>
  );
}
