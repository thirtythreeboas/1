import Hero from "./components/Hero";
import Info from "./components/Info";
import Countdown from "./components/Countdown";
import Tab from "./components/Tab";
import Color from "./components/Color";
import WishList from "./components/WishList";
import Form from "./components/Form";
import WeddingVideo from './asset/Wedding.mp4';
import { useEffect, useState } from "react";


function App() {

  const [hide, setHide] = useState(false);
  // useEffect(() => {
  //   if(!hide){
  //     document.body.style.overflowY = 'hidden';
  //   }else{
  //     document.body.style.overflowY = 'auto';
  //   }
  // }, [hide])

  return (
    <div>
      <div className={`${hide ? 'opacity-0' : 'opacity-100'} transition duration-500 bg-white z-[1000] pointer-events-none flex fixed top-0 items-center justify-center  w-screen h-screen`}>
        <video autoPlay muted onEnded={() => setHide(true)}>
          <source src={WeddingVideo} type="video/mp4" />
        </video>
      </div>
      <div>
        <Hero />
          <div className="bg-body bg-cover sm:pb-56 pb-10">
            <Info />
            <Countdown /> 
            <Tab />
            <Color />
            <WishList />
            <Form /> 
        </div>
      </div>
    </div>
  );
}

export default App;
