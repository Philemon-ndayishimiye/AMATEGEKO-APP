import { Outlet } from "react-router-dom";
import CourseNav from "./CourseNav";
import Progress from "./Progress";
import CourseSide from "./CourseSide";

export default function CoursePage() {
  return (
    <div>
       <CourseNav/>
       <Progress/>
   
   <div className="flex ">
     <CourseSide/>
     <div className="w-full ml-4 mr-10">
        <Outlet/>
     </div>
   </div>
      

    </div>
  )
}
