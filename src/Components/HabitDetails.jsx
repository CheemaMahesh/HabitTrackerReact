import React, { useEffect, useState } from "react";
import styles from "./HabitDetails.module.css";
import { useValue } from "../HabitContext";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

export default function HabitDetails() {
  const { hdId,updateMon,updateSun,updateTue,updateThu,updateFri,updateSat,updateWed } = useValue();
  const [hDetails, setHDetails] = useState(null);

  useEffect(() => {
    // Fetch habit details with the provided hdId
    const fetchHabitDetails = async () => {
      try {
        const habitDocRef = doc(db, "habits", hdId);
        const habitDocSnapshot = await getDoc(habitDocRef);

        if (habitDocSnapshot.exists()) {
          const habitData = habitDocSnapshot.data();
          setHDetails(habitData);
        } else {
          console.log("Habit not found");
        }
      } catch (error) {
        console.error("Error fetching habit details:", error);
      }
    };
    fetchHabitDetails();
  }, [hdId]);

  return (
    <>
      <div className={styles.habitDetailsContainer}>
      <div className="dummy"></div>
        {hDetails ? (
          <div className={styles.habitDetails}>
            <h2>{hDetails.title}</h2>
            <div className={styles.selectContainer}>
                <div className={styles.dummy}></div>
              <div>
                <label htmlFor="sunSelect">Sun:</label>
                <select id="sunSelect" defaultValue={hDetails.sun} onChange={(e)=>updateSun(hdId,e.target.value)}>
                <option value={hDetails.sun}>{hDetails.sun}</option>
                  <option value="Done">Done</option>
                  <option value="Not-Done">Not Done</option>
                </select>
              </div>
              <div>
                <label htmlFor="monSelect">Mon:</label>
                <select id="monSelect" defaultValue={hDetails.mon} onChange={(e)=>updateMon(hdId,e.target.value)}>
                <option value={hDetails.mon}>{hDetails.mon}</option>
                  <option value="Done">Done</option>
                  <option value="Not-Done">Not Done</option>
                </select>
              </div>
              <div>
                <label htmlFor="tueSelect">Tue:</label>
                <select id="tueSelect" defaultValue={hDetails.tue} onChange={(e)=>updateTue(hdId,e.target.value)}>
                <option value={hDetails.tue}>{hDetails.tue}</option>

                  <option value="Done">Done</option>
                  <option value="Not-Done">Not Done</option>
                </select>
              </div>
              <div>
                <label htmlFor="tueSelect">Wed:</label>
                <select id="tueSelect" defaultValue={hDetails.wed} onChange={(e)=>updateWed(hdId,e.target.value)}>
                <option value={hDetails.wed}>{hDetails.wed}</option>

                  <option value="Done">Done</option>
                  <option value="Not-Done">Not Done</option>
                </select>
              </div>
              <div>
                <label htmlFor="thuSelect">Thu:</label>
                <select id="thuSelect" defaultValue={hDetails.thu} onChange={(e)=>updateThu(hdId,e.target.value)}>
                <option value={hDetails.thu}>{hDetails.thu}</option>

                  <option value="Done">Done</option>
                  <option value="Not-Done">Not Done</option>
                </select>
              </div>
              <div>
                <label htmlFor="friSelect">Fri:</label>
                <select id="friSelect" defaultValue={hDetails.fri} onChange={(e)=>updateFri(hdId,e.target.value)}>
                <option value={hDetails.fri}>{hDetails.fri}</option>

                  <option value="Done">Done</option>
                  <option value="Not-Done">Not Done</option>
                </select>
              </div>
              <div>
                <label htmlFor="satSelect">Sat:</label>
                <select id="satSelect" defaultValue={hDetails.sat} onChange={(e)=>updateSat(hdId,e.target.value)}>
                <option value={hDetails.sat}>{hDetails.sat}</option>

                  <option value="Done">Done</option>
                  <option value="Not-Done">Not Done</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading habit details...</p>
        )}
      </div>
    </>
  );
}
