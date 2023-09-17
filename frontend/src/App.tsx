import Card from "./components/Card";
import Header from "./components/Header";
import Modal from "./components/Modal";
import useMain from "./hooks/useMain";

export default function App() {
  const { showModal, setShowModal } = useMain();


  return (
    <div className="bg-[#0F0F0F] h-screen w-screen flex justify-center overflow-scroll">
        <div className="w-fit mt-[3.38rem]">
          <Header number={1} />
          <div className="flex gap-[2.31rem] justify-center mt-8 mb-6">
            <Card name='Biologia' data='29/10/2023' value={5}/>
            <Card name='Artes' data='29/10/2023' value={7}/>
            <Card name='Geografia' data='29/10/2023' value={8}/>
            <Card name='Sociologia' data='29/10/2023' value={5}/>
          </div>
          <Header number={2}/>
          <div className="flex gap-[2.31rem] justify-center mt-8 mb-6">
            <Card name='Biologia' data='29/10/2023' value={5}/>
            <Card name='Artes' data='29/10/2023' value={7}/>
            <Card name='Geografia' data='29/10/2023' value={8}/>
            <Card name='Sociologia' data='29/10/2023' value={5}/>
          </div>
          <Header number={3}/>
          <div className="flex gap-[2.31rem] justify-center mt-8 mb-6">
            <Card name='Biologia' data='29/10/2023' value={5}/>
            <Card name='Artes' data='29/10/2023' value={7}/>
            <Card name='Geografia' data='29/10/2023' value={8}/>
            <Card name='Sociologia' data='29/10/2023' value={5}/>
          </div>
          <Header number={4}/>
          <div className="flex gap-[2.31rem] justify-center mt-8 mb-6">
            <Card name='Biologia' data='29/10/2023' value={5}/>
            <Card name='Artes' data='29/10/2023' value={7}/>
            <Card name='Geografia' data='29/10/2023' value={8}/>
            <Card name='Sociologia' data='29/10/2023' value={5}/>
          </div>
        </div>
      {showModal && <Modal number={1} />}
    </div>
  )
}
