import card1 from '../assets/image bg.png'
import card2 from '../assets/Bitmap.png'
import card3 from '../assets/Bitmap (1).png'
import price1 from '../assets/dot.svg'
import price2 from '../assets/dot (1).svg'
import price3 from '../assets/dot.svg'

const ContentStrategis = () => {
    return (
        <div className='mt-20 mb-24'>
            <div className='ml-[45px]'>
                <p className='font-bold text-4xl'>Contents Strategies</p>
                <p className='text-lg mt-2 font-semibold'>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
            </div>
            <div className="flex justify-center mt-5">
                <div className='mr-[40px] outline outline-gray-200 rounded-lg'>
                    <img src={card1}/>
                    <p className='m-5 text-lg'>By <span className='font-bold'>Wahid Ari</span> | 03 Marc 2019</p>
                    <p className='mt-7 ml-5 text-[25px] mb-7 font-bold'>Increasing Prosperty <br /> with Positive Thinking</p>
                </div>
                <div className='mr-[40px] outline outline-gray-200 rounded-lg'>
                    <img src={card2}/>                    
                    <p className='m-5 text-lg'>By <span className='font-bold'>Wahid Ari</span> | 03 Marc 2019</p>
                    <p className='mt-7 ml-5 text-[25px] mb-7 font-bold text-[#02897A]'>Motivation Is The First <br/>step To Success</p>
                </div>
                <div className='outline outline-gray-200 rounded-lg'>
                    <img src={card3} />
                    <p className='m-5 text-lg'>By <span className='font-bold'>Wahid Ari</span> | 03 Marc 2019</p>
                    <p className='mt-7 ml-5 text-[25px] mb-7 font-bold'>Success Steps For Your <br/>Personal Or Business</p>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
                <img src={price1} />
                <img src={price2} />
                <img src={price3} />
            </div>
        </div>
    )
}

export default ContentStrategis