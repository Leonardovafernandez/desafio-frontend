import BimestreContentFour from "./components/Bimestre/BimestreFour";
import BimestreContentOne from "./components/Bimestre/BimestreOne";
import BimestreContentThree from "./components/Bimestre/BimestreThree";
import BimestreContentTwo from "./components/Bimestre/BimestreTwo";

export default function App() {
  return (
    <div className="bg-[#0F0F0F] h-screen w-screen flex justify-center overflow-scroll">
        <div className="w-fit mt-[3.38rem]">
          <BimestreContentOne bimestre={1}/>
          <BimestreContentTwo bimestre={2}/>
          <BimestreContentThree bimestre={3}/>
          <BimestreContentFour bimestre={4}/>
        </div>
    </div>
  )
}
