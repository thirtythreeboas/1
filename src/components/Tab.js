import React from 'react';
import video2 from '../asset/video2.mp4';

function Tab() {
  return (
    <div className='max-w-[1000px] xl:px-0 px-4 mx-auto my-10'>
        <h1 className='font-Playfair text-2xl md:text-4xl font-medium text-center text-[#181818] my-8'>ПЛАН ДНЯ</h1>

        <div className='bg-[#f9f9f6] border border-gray-400 md:h-[350px] p-5 md:p-10 flex md:flex-row flex-col gap-x-6'>
          <div className='flex md:w-[70%] md:flex-row flex-col'>
            <div>
              <video muted autoPlay loop controls={false} className="md:w-[180px]">
                <source src={video2} type="video/mp4" />
              </video>
            </div>
            <div className='flex-1 tab-content overflow-auto md:px-8 md:mt-0 mt-5'>
              <h3 className='text-xl font-Baskvl lg:text-[28px] font-semibold mb-3 md:mb-5'>
              Место торжества
              </h3>
              <p className='font-Lowan text-justify tracking-wide leading-relaxed text-[#363636]'>
              Наша свадебная церемония, словно сошедшая со страниц романа о Средневековье, пройдет в живописном саду роскошного замка Бип. После того, как мы скажем друг другу заветное «Да», мы будем рады отпраздновать это важное событие вместе с вами за праздничным столом! И обещайте, что вы возьмете с собой хорошее настроение, ведь, мы надеемся танцевать и веселиться всю ночь напролет!
              </p>
            </div>
          </div>
          <div className='md:w-[30%] space-y-5 tab-content md:mt-0 mt-5 overflow-auto'>
            <div className='space-y-2'>
              <h4 className='font-Baskvl text-xl font-semibold'>Замок Бип</h4>
              <p className='font-Lowan text-[#363636]'>Адрес: Павловск, Мариинская ул., 4</p>
              <p className='font-Lowan text-[#363636]'>Четверг <br /> 3 августа <br /> 16:30</p>
              <a href='https://cutt.ly/A3gPsDd' target='_blank' className='block w-max px-10 py-2 text-white hover:bg-[#363636] tracking-wider transition duration-200 rounded-md bg-[#c2c2c2] font-Inter font-medium text-[13px]'>Посмотреть на карте</a>
            </div>
            <div className='space-y-2'>
              <p className='font-Lowan leading-6 text-[#363636]'>Мы очень Вас любим и не могли о Вас не позаботиться! Все наши гости смогут разместиться в комфортных номерах замка, а утром мы Вас будем ждать за вкусным, уютным завтраком, чтобы вместе вспомнить как это было</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-3 justify-between relative top-[-8px]'>
          <div className={styles.selectContainer}>
            <input type="radio" name="select" className={styles.radio}/>
            <h5 className={styles.selectHeading}> Сбор Гостей, заселение в отель </h5>
            <p className={styles.selectTime}>16:30</p>
          </div>
         
          <div className={styles.selectContainer}>
            <input type="radio" name="select" className={styles.radio}/>
            <h5 className={styles.selectHeading}> Церемония </h5>
            <p className={styles.selectTime}>17:30</p>
          </div>
         
          <div className={styles.selectContainer}>
            <input type="radio" name="select" className={styles.radio}/>
            <h5 className={styles.selectHeading}> Праздничный ужин </h5>
            <p className={styles.selectTime}>18:30</p>
          </div>
        </div>
    </div>
  )
}


const styles = {
  selectContainer: 'flex text-center items-center flex-col px-10 cursor-pointer',
  selectHeading: 'font-Baskvl sm:text-xl text-sm font-semibold mt-5 mb-2',
  selectTime: 'font-Lowan text-[#363636]'
}

export default Tab