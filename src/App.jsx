import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background relative items-center">
      <h1 className="bg-white rounded-lg text-center mt-[40px] px-3 py-4
       font-bold text-2xl ml-4 mr-4 w-11/12 ">RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y-5 mt-5 ">
        <Random/>
        <Tag/>
      </div>
      
    </div>
  );
}
