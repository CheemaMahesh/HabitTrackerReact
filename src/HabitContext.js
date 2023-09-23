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
// =====================================================================================================================

    //uploading the data to the firebase
  async  function handleUpload(habit){
    const docRef = doc(collection(db, "habits"))
            
    await setDoc(docRef, {
            title: habit,
            week:{sun:"No-Action",
            mon:"No-Action",
            tue:"No-Action",
            wed:"No-Action",
            thu:"No-Action",
            fri:"No-Action",
            sat:"No-Action",},
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

        }}
    >
        {children}
    </HHabitcontext.Provider>)
}
export {useValue};
export default HabitContext;