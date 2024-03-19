import { useEffect, useRef, useState } from "react";
import { useTaskStore } from "../../store/taskStore";
import { ScrollShadow, Button, Textarea } from "@nextui-org/react";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";

const CommentsTask = () => {
  // addComment
  // const task = useTaskStore((state) => state.task);

  const { id } = useParams();
  const tasks = useTaskStore((state) => state.tasks);
  const task = tasks.find((task) => task.id === id);
  const addComment = useTaskStore((state) => state.addComment);

  const [newComment, setnewComment] = useState("");
  const commentBoxRef = useRef(null);

  const handlerSubmit = (e) => {
    e.preventDefault();
    addComment(task.id, newComment);
    setnewComment("");
    scrollToBottom();
  };

  const scrollToBottom = () => {
    if (commentBoxRef.current) {
      commentBoxRef.current.scrollTop = commentBoxRef.current.scrollHeight;
    }
  };

  // Desplazar al fondo al montar el componente
  scrollToBottom();

  // Desplazar al fondo cuando se agrega un comentario
  const onCommentAdded = () => {
    scrollToBottom();
  };

  // Suponiendo que el store notifica la adición de comentarios:
  useTaskStore.subscribe(onCommentAdded);
  useEffect(() => {
    scrollToBottom();
  }, [setnewComment]);

  return (
    <div className="flex flex-col w-[60%] rounded-t-lg overflow-hidden min-h-[40vh] justify-between">
      <section className="bg-gray-700 w-full flex justify-between items-center px-4 py-2">
        <h3 className="text-2xl font-semibold ">Comments</h3>
      </section>
      {/* 
      
            <section className="flex flex-col justify-center overflow-x-hidden items-center h-full">
        {task.comments?.map((comment) => (
          <div key={v4()} className="w-full">
            <p className="font-semibold text-sm">
              {new Date(comment["date"]).toLocaleDateString()}
            </p>
            <div className="min-h-16 w-full backdrop-blur-md bg-white/10 my-2 px-4 py-2 rounded-xl  shadow-xl">
              <p className="text-pretty text-sm">{comment.comment}</p>
            </div>
          </div>
        ))}
      </section>
      
      */}
      <ScrollShadow
        ref={commentBoxRef}
        hideScrollBar
        size="10"
        className="flex flex-col justify-center overflow-x-hidden items-center h-[20vh]"
      >
        {task.comments?.map((comment) => (
          <div key={v4()} className="w-full">
            <p className="font-semibold text-sm">
              {new Date(comment["date"]).toLocaleDateString()}
            </p>
            <div className="min-h-16 w-full backdrop-blur-md bg-white/10 my-2 px-4 py-2 rounded-xl  shadow-xl">
              <p className="text-pretty text-sm">{comment.comment}</p>
            </div>
          </div>
        ))}
      </ScrollShadow>
      <div className=" flex h-[10vh] items-end w-full">
        <Textarea
          value={newComment}
          // variant="underlined"
          label="Add comment"
          fullWidth
          labelPlacement="inside"
          onChange={(e) => setnewComment(e.target.value)}
        />
        <Button
          className=" ml-8 mr-1 mb-1  px-4"
          size="sm"
          onClick={(e) => handlerSubmit(e)}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default CommentsTask;
