import { useTaskStore } from "../../store/taskStore";
import { ScrollShadow, Button, Textarea } from "@nextui-org/react";
import { v4 } from "uuid";
const CommentsTask = () => {
  const task = useTaskStore((state) => state.task);
  console.log(task.comments);

  return (
    <div className="flex flex-col w-[60%] rounded-t-lg overflow-hidden min-h-[40vh] justify-between ">
      <section className="bg-gray-700 w-full flex justify-between items-center px-4 py-2">
        <h3 className="text-2xl font-semibold ">Comments</h3>
      </section>
      <ScrollShadow
        hideScrollBar
        className="flex flex-col gap-y-2 px-4 py-4 pb-20 h-full overflow-y-auto  max-h-[40vh] items-start "
      >
        {task.comments?.map((comment) => (
          <div key={v4()} className="w-full">
            <p className="font-semibold text-sm">
              {new Date(comment?.date).toLocaleDateString()}
            </p>
            <div className="min-h-16 w-full backdrop-blur-md bg-white/10 my-2 px-4 py-2 rounded-xl  shadow-xl">
              <p className="text-pretty text-sm">{comment.comment}</p>
            </div>
          </div>
        ))}
      </ScrollShadow>
      <div className=" flex flex-col items-end w-full">
        <Textarea
          variant="underlined"
          label="Add comment"
          fullWidth
          labelPlacement="inside"
        />
        <Button className="my-2  px-4" onClick={() => console.log("click")}>
          Add Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentsTask;
