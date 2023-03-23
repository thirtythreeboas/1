import girls from '../asset/girls.png';
import mens from '../asset/mens.png';

import girlColor from '../asset/girl-color.png';
import menColor from '../asset/men-color.png';

function Color() {
  return (
    <div className='max-w-[1000px] mx-auto xl:px-0 px-5'>
        <hr className='border-t w-[30%] mx-auto border-black mb-10' />

        <h1 className='font-Playfair text-center text-2xl md:text-4xl tracking-wide mb-12 font-semibold'>DRESS CODE</h1>
        <p className='font-Baskvl text-lg text-center tracking-wide leading-relaxed text-[#363636]'>
          Мы очень старались сделать праздник красивым и будем рады, <br /> если в своих нарядах вы поддержите цветовую гамму нашей свадьбы
        </p>
        <div className='flex justify-between sm:flex-row flex-col items-center gap-2 sm:gap-4 mt-16 mb-10'>
            <div>
              <p className='font-Lowan text-2xl text-center tracking-wide leading-relaxed text-[#363636]'>Для девушек:</p>
              <img src={girlColor} className="xl:order-1 order-2 w-[250px] md:w-[450px]"/>
            </div>
            <div>
              <p className='font-Lowan text-2xl text-center tracking-wide leading-relaxed text-[#363636] mb-2'>Для мужчин:</p>
              <img src={menColor} className="xl:order-2 order-1 w-[140px] md:w-[260px]"/>
            </div>
        </div>

        <div className='flex sm:flex-row flex-col justify-between items-center 2xl:px-0 lg:px-10 sm:gap-y-0 gap-y-7'>   
              <img src={girls} alt="" className='w-full xl:w-[520px] xl:-ml-20 pointer-events-none' />
              <img src={mens} alt="" className='w-full xl:w-[480px] ml-20 xl:ml-40 relative sm:left-0 -left-[40px] pointer-events-none' />
        </div>
    </div>
  )
}

const styles = {
    colorBox: 'h-12 flex-1'
}


export default Color