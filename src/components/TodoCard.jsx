import { Button, ButtonGroup } from "@nextui-org/react";

const TodoCard = (task) => {
  const { title, description, id, status, handlerDelete } = task;

  return (
    <article className="bg-gradient-to-b to-[#141414] from-gray-950 shadow-lg rounded-md w-full py-2 px-4 ">
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div className="p-4">
        <p className="text-pretty">{description}</p>
      </div>
      <div className="flex justify-around items-center">
        <p className="font-semibold">{status}</p>
        <ButtonGroup>
          <Button size="sm" onClick={() => console.log("editin")}>
            Edit
          </Button>
          <Button size="sm" onClick={() => handlerDelete(id)} color="danger">
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </article>
  );
};

export default TodoCard;
