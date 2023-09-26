import React from "react";
import styles from "./Habits.module.css";

import { useValue } from "../HabitContext";
import { Link } from "react-router-dom";

export default function Habits() {
  const { habits, deleteHabbit, updateTody, goToHDPage, updateFav} = useValue();

  return (
    <div className="HabitsContainer">
      <div className={styles.dummy}></div>
      <div className={styles.HabitsList}>
        {habits.map((habit, i) => (
          <div className={styles.wrapper} key={i}>
            <div className={styles.HabitItem}>
              <label className={styles.HabitLabel}>
                <input
                  type="checkbox"
                  className={styles.HabitCheckbox}
                  onChange={() => updateTody(habit.id, habit.today)}
                  checked={habit.today}
                />
                {habit.title}
              </label>
              <button
                className={styles.DeleteButton}
                onClick={() => deleteHabbit(habit.id)}
              >
                DELETE
              </button>
              
                
                
              
                <Link className={styles.Link} to={`/HabitDetails/:${habit.id}`} onClick={() => goToHDPage(habit.id)}>
                  Info
                </Link>
             
              {habit.fav ? (
                <div className={styles.Fav} style={{ color: "gold" }} onClick={()=>updateFav(habit.id,habit.fav)}>
                  &#9733;
                </div>
              ) : (
                <div className={styles.Fav} onClick={()=>updateFav(habit.id,habit.fav)}>&#9733;</div>
              )}
            </div>
            <div className={styles.details}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
