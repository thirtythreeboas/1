import {useEffect, useState} from 'react';
import upperLine from '../asset/upper-countdown-border.png';
import lowerLine from '../asset/lower-countdown-border.png';

function Countdown() {

    const [countdownDate, setCountdownDate] = useState(new Date('08/03/2023').getTime());
    const [state, setState] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});
  
    useEffect(() => {
      setInterval(() => setNewTime(), 1000);
    }, []);
  
    const setNewTime = () => {
      if (countdownDate) {
        const currentTime = new Date().getTime();
        const distanceToDate = countdownDate - currentTime;
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
        setState({ days: days, hours: hours, minutes, seconds });
      }
    };


    const Box = ({time, text}) => {
        return (
            <div className='rounded-full text-[#968a77] h-[70px] sm:h-28 lg:h-44 w-[70px] sm:w-28 lg:w-44 border-double border-[6px] border-[#5c5341] flex flex-col gap-y-1 justify-center'>
                <p className='text-lg md:text-3xl font-Baskvl font-semibold'>{time}</p>
                <p className='sm:text-lg font-Lowan font-semibold'>{text}</p>
            </div>
        )
    }

  return (
    <div className='text-center py-10 my-20 bg-[#f9f9f6] space-y-5 md:space-y-10'>
        <h1 className='font-Playfair text-base sm:text-2xl lg:text-3xl xl:text-[45px] tracking-wide text-[#968a77] font-semibold'>Мы создадим нашу семью через…</h1>
        <img src={upperLine} alt="" className='mx-auto w-[220px] sm:w-[500px] block opacity-30' />
        <div className='flex gap-3 sm:gap-10 lg:gap-16 justify-center pb-8'>
            <Box time={state.days} text='Дней' />
            <Box time={state.hours} text='Часов' />
            <Box time={state.minutes} text='Минут' />
            <Box time={state.seconds} text='Секунд' />
        </div>
        <img src={lowerLine} alt="" className='!mt-0 mx-auto w-[220px] sm:w-[500px] block opacity-30' />
    </div>
  )
}

export default Countdown