import select from '../assets/icon1-spect.svg'
import select1 from '../assets/icon2-spect.svg'
import select2 from '../assets/icon3-spect.svg'
import select3 from '../assets/icon4-spect.svg'
import bg from '../assets/Bg.png'

const Product = () => {
    return (
        <div className='relative mt-28'>
            <p className='font-bold text-center text-4xl mb-5'>Product was Built Specifically <br /> for you</p>
            <span className='-z-10 absolute w-full'>
                <img src={bg} alt="" />
            </span>
            <div className='flex mt-16'>
                <div className='ml-24'>
                    <img src={select} width="50" height="50" alt="" />
                    <p className='font-bold'>First click tests</p>
                    <p>While most people enjoy </p>
                    <p>casino gambling,</p>
                </div>
                <div className='ml-24'>
                    <img src={select1} width="50" height="50" alt="" />
                    <p className='font-bold'>Design surveys</p>
                    <p>Sports betting, lottery and </p>
                    <p>bingo playing for the fun</p>
                </div>
                <div className='ml-24'>
                    <img src={select2} width="50" height="50" alt="" />
                    <p className='font-bold'>Preference tests</p>
                    <p>The Myspace page defines</p>
                    <p>the individual.</p>
                </div>
                <div className='ml-24'>
                    <img src={select3} width="50" height="50" alt="" />
                    <p className='font-bold'>Five second tests</p>
                    <p>Personal choices and the </p>
                    <p>overall personality of the person. </p>
                </div>
            </div>
            <div className='text-center mt-24 mb-[40px]'>
                <a href='#' className='text-white py-3 px-5 rounded-md bg-[#02897A] hover:bg-green-200' type="submit">SIGN UP NOW</a>
            </div>
        </div>
    )
}

export default Product