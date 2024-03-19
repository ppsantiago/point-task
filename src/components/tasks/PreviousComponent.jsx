import "../../App.css";

const PreviousComponent = () => {
  return (
    <div className="flex flex-col  w-[40%] rounded-t-lg overflow-hidden min-h-[40vh] justify-between bg-slate-700 ">
      <section className={`w-full bg-white/50 flex justify-between`}>
        <h3 className="text-2xl text-black font-semibold px-4 py-2">
          Previous
        </h3>
      </section>
      <section className="flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-semibold px-4 py-2">Working...🛠️</h1>
      </section>
    </div>
  );
};

export default PreviousComponent;
