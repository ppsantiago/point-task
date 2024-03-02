const TodoCard = () => {
  return (
    <article className="border-2 rounded-md w-full py-2 px-4">
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-bold">todo title 📰</h1>
      </div>
      <div className="p-4">
        <p className="text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta
          placeat officia voluptatibus nam vel aliquid!
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p>footer</p>
      </div>
    </article>
  );
};

export default TodoCard;
