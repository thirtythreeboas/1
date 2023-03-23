import {useEffect, useRef} from 'react'
import border from '../asset/hero-border.png';
import backgroundVideo from '../asset/video.mp4';
import TextAnimation from "react-text-animations";

function Hero() {
  const ref = useRef();

  useEffect(() => {
    ref.current.play();
  }, [])

  return (
      <section className='text-white h-screen'>
           <div className='fixed top-0 left-0 bg-[#00000048] w-full h-full z-[-1]'></div>
            <video ref={ref} muted loop className='fixed top-0 left-0 z-[-2] w-[100vw] h-full object-cover'>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          <div className='px-10 h-[100%] mx-auto py-10'>
            <p className='hidden lg:block font-Danette md:text-4xl xl:text-6xl z-10'>Irina & Nikita</p>
            <div className='flex flex-col items-center justify-center h-[100%]'>
              <h1 className='font-Playfair text-2xl lg:text-4xl xl:text-7xl font-semibold tracking-widest mb-10'>Ирина & Никита</h1>
              <TextAnimation.Slide animation={{duration: 700, timingFunction: 'ease-in', delay: 3000}} target="Merciful" text={[' Приглашение на торжество...', 'Мы женимся и надеемся, что Вы разделите с нами этот особенный день!']}> </TextAnimation.Slide>
              <img src={border} className="w-[350px] my-8" />
              <div className='text-white py-2 px-10 font-Baskvl text-xl sm:text-4xl tracking-wider font-semibold sm:mt-10'>3 августа 2023</div>
            </div>
          </div>
      </section>
  )
}
 
export default Hero