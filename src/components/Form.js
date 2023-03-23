import rightCornerPicture from '../asset/corner-1.png';
import leftCornerPicture from '../asset/corner-2.png';
import flower from '../asset/flower.png';
import vetka from '../asset/vetka.png';


function Form() {
  return (
    <div className="bg-[#f9f9f6] py-10 xl:mt-64 relative ">

        <div className="max-w-[1144px] mx-auto flex xl:flex-row flex-col relative">
            <div className="flex-1 xl:order-1 order-2">
            <div className='xl:hidden xl:px-0 px-5'>
                <h2 className="text-center font-Baskvl text-2xl"> Ответ на приглашение</h2>
                <div className=" space-y-4 my-10">
                  <input placeholder="Имя" className=" bg-transparent text-[#817c70] border-0 outline-none border-b-2 border-gray-400 px-5 py-2 w-full text-sm" />
                  <input placeholder="Фамилия" className=" bg-transparent text-[#817c70] border-0 outline-none border-b-2 border-gray-400 px-5 py-2 w-full text-sm" />
                  <input placeholder="Номер телефона" className=" bg-transparent text-[#817c70] border-0 outline-none border-b-2 border-gray-400 px-5 py-2 w-full text-sm" />
                </div>

                <div className='text-[#5f5f5f] space-y-4'>
                    <div className='flex items-center gap-2'>
                      <input type="radio" name="choose" id="one" />
                      <label className='font-Savoye text-black' htmlFor="one">Да, я приду</label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <input type="radio" name="choose" id="two" />
                      <label className='font-Savoye text-black' htmlFor="two">Затрудняюсь ответить</label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <input type="radio" name="choose" id="three" />
                      <label className='font-Savoye text-black' htmlFor="three">Не смогу присутствовать</label>
                    </div>
                  </div>
                  <button className="bg-[#f4f4f1] font-Lowan text-lg px-10 py-2 mt-10">
                    Отправить
                  </button>
              </div>
            </div>

            <div className="flex-1 xl:order-2 order-1">
                <h2 className="text-center font-Savoye text-2xl">Мы будем счастливы Вас видеть!</h2>
                <p className="text-center xl:text-right font-Savoye text-lg text-[#817c70] mt-2 mb-10">С любовью Ирина и Никита</p>
                <p className="font-Baskvl text-lg xl:text-left text-center">По всем вопросам, связанным с торжеством, <br /> обращайтесь к нашему организатору <br/> Марии: +7 911-837-13-91</p>
                <button className="bg-[#f4f4f1] block xl:mx-0 mx-auto font-Lowan text-lg px-10 py-2 my-5 border-[6px] border-double border-[#cfcdc9]">
                    Связаться
                </button>
            </div>

            <div className="p-10 hidden absolute xl:flex justify-center items-center bg-white border-4 left-0 top-1/2 -translate-y-1/2 h-[700px] w-[500px] border-[#ebecec]">
              <div className='relative'>
                <img src={flower} className="w-[300px] xl:block hidden absolute -right-[63%] -top-[30%] -z-[5]" />
                <h2 className="text-center font-Baskvl text-4xl"> Ответ на приглашение</h2>
                <div className=" space-y-4 my-10">
                  <input placeholder="Имя" className=" bg-tranparent text-[#817c70] border-0 outline-none border-b-2 border-gray-400 px-5 py-2 w-full text-sm" />
                  <input placeholder="Фамилия" className=" bg-tranparent text-[#817c70] border-0 outline-none border-b-2 border-gray-400 px-5 py-2 w-full text-sm" />
                  <input placeholder="Номер телефона" className=" bg-tranparent text-[#817c70] border-0 outline-none border-b-2 border-gray-400 px-5 py-2 w-full text-sm" />
                </div>

                <div className='text-[#5f5f5f] space-y-4'>
                    <div className='flex items-center gap-2'>
                      <input type="radio" name="choose" id="one" />
                      <label className='font-Savoye text-black' htmlFor="one">Да, я приду</label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <input type="radio" name="choose" id="two" />
                      <label className='font-Savoye text-black' htmlFor="two">Затрудняюсь ответить</label>
                    </div>
                    <div className='flex items-center gap-2'>
                      <input type="radio" name="choose" id="three" />
                      <label className='font-Savoye text-black' htmlFor="three">Не смогу присутствовать</label>
                    </div>
                  </div>
                  <button className="bg-[#f4f4f1] font-Lowan text-lg px-10 py-2 mt-10">
                    Отправить
                  </button>
              </div>
            </div>
        </div>

        <div className='absolute sm:block hidden -left-10 top-0 xl:top-48 -rotate-[20deg]'>
          <img src={leftCornerPicture} className="w-[160px] 2xl:w-[200px]" />
        </div>
        <div className='absolute sm:block hidden -right-4 -bottom-10 rotate-[20deg]'>
          <div className='relative'>
            <img src={rightCornerPicture} className="w-[160px] 2xl:w-[200px]" />
            <img src={vetka} className="-z-[1] absolute top-40 right-10" />
          </div>
        </div>
    </div>
  )
}

export default Form