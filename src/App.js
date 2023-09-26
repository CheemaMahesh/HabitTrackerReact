import './App.css';
import Navbar from './Components/Navbar';
import HabitContext from './HabitContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Habits from './Components/Habits';
import HabitDetails from './Components/HabitDetails';


function App() {

  const broweseRouter=createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children:[{
        index:true,
        element:<Habits/>
      },
     { path:"/HabitDetails/:HID",
        element:<HabitDetails/>
      }

      ]
    }
  ]

  )
  return (
    <>
     <HabitContext>
     <RouterProvider router={broweseRouter}/>
     </HabitContext>
    </>
  );
}

export default App;
