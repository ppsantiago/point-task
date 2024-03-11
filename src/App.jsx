import TodoBoard from "./components/TodoBoard";

function App() {
  return (
    <>
      <section className="overflow-x-hidden flex flex-col justify-start items-center h-auto  from-[#141414] to-neutral-800">
        <TodoBoard />
      </section>
    </>
  );
}

export default App;
