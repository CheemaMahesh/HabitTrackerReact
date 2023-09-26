import { createContext,useContext,useEffect,useState } from "react";
import {db} from "./Firebase";
import { doc, setDoc, collection, onSnapshot, deleteDoc,increment,updateDoc } from "firebase/firestore";


const HHabitcontext=createContext();

const useValue=()=>{
    const value=useContext(HHabitcontext);
    return value;
}



function HabitContext({children}){
    const [habits,setHabits]=useState([]);
    const [hdId,setHdId]=useState("");
// ========================================================================================================
function goToHDPage(id){
    setHdId(id);
}

//============================================================================================================
        //deleting the Habit
        async function deleteHabbit(i){
            try{
                const docRef=doc(db, "habits",i);
                deleteDoc(docRef);
            }catch(err){
console.log("Error in Deleting the Habit", err);
            }
        }
    
//    =========================================================================================================
    // Function to update the count value in Firebase
  async function up(docId, count) {
    const habitDocRef = doc(db, "habits", docId);
    await updateDoc(habitDocRef, {
      completed: increment(count)
    });
  }
// ===========================================================================================================
    //Rendering the data from firebase
useEffect(() => {
        
    const sub=onSnapshot(collection(db,"habits"),(snapShot)=>{
            const blogs = snapShot.docs.map((doc) => {
            return{
                id: doc.id,
                ...doc.data()
            }
        })
        console.log(blogs);
        setHabits(blogs);
    })
},[]);
//    =========================================================================================================
    // Function to Update the today value
    async function updateTody(id,value) {
        try {
            if(value===true){
                value=false;
            }else if(value===false){
                value=true;
            }
          const habitDocRef = doc(db, "habits", id);
          await updateDoc(habitDocRef, {
            today: value 
          });
        } catch (error) {
          console.error("Error updating 'today' field:", error);
        }
      }
      //    =========================================================================================================
    // Function to Update the Fav value
    async function updateFav(id,value) {
        try {
            if(value===true){
                value=false;
            }else if(value===false){
                value=true;
            }
          const habitDocRef = doc(db, "habits", id);
          await updateDoc(habitDocRef, {
            fav: value 
          });
        } catch (error) {
          console.error("Error updating 'today' field:", error);
        }
      }

//    =========================================================================================================
    // Function to Update the today value
    async function updateMon(id,value) {
        try {
          const habitDocRef = doc(db, "habits", id);
          await updateDoc(habitDocRef, {
            mon: value 
          });
        } catch (error) {
          console.error("Error updating 'today' field:", error);
        }
      }

//    =========================================================================================================
    // Function to Update the today value
    async function updateSun(id,value) {
      try {
        const habitDocRef = doc(db, "habits", id);
        await updateDoc(habitDocRef, {
          sun: value 
        });
      } catch (error) {
        console.error("Error updating 'today' field:", error);
      }
    }
//    =========================================================================================================
    // Function to Update the today value
    async function updateTue(id,value) {
      try {
        const habitDocRef = doc(db, "habits", id);
        await updateDoc(habitDocRef, {
          tue: value 
        });
      } catch (error) {
        console.error("Error updating 'today' field:", error);
      }
    }
//    =========================================================================================================
    // Function to Update the today value
    async function updateThu(id,value) {
      try {
        const habitDocRef = doc(db, "habits", id);
        await updateDoc(habitDocRef, {
          thu: value 
        });
      } catch (error) {
        console.error("Error updating 'today' field:", error);
      }
    }
//    =========================================================================================================
    // Function to Update the today value
    async function updateFri(id,value) {
      try {
        const habitDocRef = doc(db, "habits", id);
        await updateDoc(habitDocRef, {
          fri: value 
        });
      } catch (error) {
        console.error("Error updating 'today' field:", error);
      }
    }
//    =========================================================================================================
    // Function to Update the today value
    async function updateSat(id,value) {
      try {
        const habitDocRef = doc(db, "habits", id);
        await updateDoc(habitDocRef, {
          sat: value 
        });
      } catch (error) {
        console.error("Error updating 'today' field:", error);
      }
    }
//    =========================================================================================================
    // Function to Update the today value
    async function updateWed(id,value) {
      try {
        const habitDocRef = doc(db, "habits", id);
        await updateDoc(habitDocRef, {
          wed: value 
        });
      } catch (error) {
        console.error("Error updating 'today' field:", error);
      }
    }
      
// =====================================================================================================================

    //uploading the data to the firebase
  async  function handleUpload(habit){
    const docRef = doc(collection(db, "habits"))
            
    await setDoc(docRef, {
            title: habit,
            sun:"No-Action",
            mon:"No-Action",
            tue:"No-Action",
            wed:"No-Action",
            thu:"No-Action",
            fri:"No-Action",
            sat:"No-Action",
            completed:0,
            today:false,
            fav:false, 
            createdOn: new Date()
        });

   }
//    ======================================================================================================================
    //function to 

// ========================================================================================================================

    return(<HHabitcontext.Provider
        value={{
          
            handleUpload,
            habits,
            deleteHabbit,
            updateTody,
            goToHDPage,
            hdId,
            updateFav,
            updateMon,
            updateSun,
            updateTue,
            updateThu,
            updateFri,
            updateSat,
            updateWed

        }}
    >
        {children}
    </HHabitcontext.Provider>)
}
export {useValue};
export default HabitContext;