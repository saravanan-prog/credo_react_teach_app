import CourseList from "./components/CourseList"
import TopPerformers from "./components/TopPerformers"

export default function HomePage(){


    return (
      <div>
        <div>
          <CourseList />
        </div>
        <div>
          <TopPerformers />
        </div>
        {/* <div> Events </div>
          <div> Partners </div> */}
      </div>
    );
}