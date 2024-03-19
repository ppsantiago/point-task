import InfoTask from "./InfoTask";
import SubTasks from "./SubTasks";
import { Link } from "react-router-dom";
import CommentsTask from "./CommentsTask";
import PreviousComponent from "./PreviousComponent";

const Task = () => {
  return (
    <div className="flex flex-col justify-start h-screen items-center pb-20">
      <section className="flex justify-start pl-2 items-center min-h-14 bg-gray-600 w-full">
        <Link
          className="bg-[#141414] px-6 py-2 rounded-lg shadow-xl hover:bg-[#1d1d1d] transition-all duration-300"
          to="/"
        >
          Back
        </Link>
      </section>
      <section className="flex w-11/12 pt-10 gap-9 max-h-[45vh]">
        <InfoTask />
        <SubTasks />
      </section>
      <section className="flex w-11/12 pt-10 gap-9 max-h-[45vh]">
        <CommentsTask />
        <PreviousComponent />
      </section>
    </div>
  );
};

export default Task;
