import React from 'react';
import hisImg from '../asset/his.png';
import herImg from '../asset/her.png';
import quote from '../asset/quote.png';
import {ImQuotesLeft} from 'react-icons/im';


function Info() {
  return (
    <div className='pt-16 max-w-[1140px] mx-auto xl:px-0 sm:px-10 px-4 sm:space-y-0 space-y-10'>
      
        <div className='flex sm:flex-row flex-col items-center'> 
            <img src={herImg} className='w-full sm:w-[250px] md:w-[300px]' />
            <div className='bg-[#E9ECED] shadow-lg px-4 md:px-20 py-4 min-h-[180px] font-Baskvl font-semibold leading-[1.8rem] flex items-center'>
               <div className='relative'>
                    <img src={quote} className='text-[#E0CFB1] w-8 sm:w-16 md:w-20 lg:w-[100px] absolute top-0 left-0' />
                    <p className='text-[#837d6e] text-center pl-8 sm:pl-0 sm:w-2/3 sm:ml-auto lg:mx-auto'>Мы поженимся! Сегодня и всегда, за пределами завтрашнего дня, ты нужен мне рядом со мной, всегда как мой лучший друг, любовник и вечная родственная душа.</p>
               </div>
            </div>
        </div>

        <div className='flex sm:flex-row flex-col items-center'>
            <img src={hisImg} className='sm:order-2 order-1 w-full sm:w-[250px] md:w-[280px]' />
            <div className='bg-[#E9ECED] shadow-lg sm:order-1 order-2 px-4 md:px-20 py-4 min-h-[180px] font-Baskvl font-semibold leading-[1.8rem] flex items-center'>
               <div className='relative'>
                    <img src={quote} className='text-[#E0CFB1] w-8 sm:w-16 md:w-20 lg:w-[100px] absolute top-0 left-0' />
                    <p className='text-[#837d6e] text-center pl-8 sm:pl-0 sm:w-2/3 sm:ml-auto lg:mx-auto'>Ты делаешь меня счастливее, чем когда-либо я мог себе представить, и если ты позволишь мне, я проведу остаток своей жизни, пытаясь заставить тебя чувствовать то же самое каждый день.</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Info