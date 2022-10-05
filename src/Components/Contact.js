import avatar1 from '../assets/Avator1.png'
import avatar2 from '../assets/Avator2.png'
import avatar3 from '../assets/Avator3.png'
import avatar4 from '../assets/Avator4.png'
import bg from '../assets/Bg.png'

const Contact = () => {
    return (
        <div>
            <span className='-z-50 absolute mt-[-65px]'>
                <img src={bg} className='rotate-180' alt="" />
            </span>
            <p className="font-bold text-center text-4xl">Quick & Easy Process</p>
            <p className="text-center p-2 mb-24">Do you require some help for your project: Conception workshop, <br /> prototyping, marketing strategy, landing page, Ux/UI?</p>
            <div className="flex justify-center">
                <div className='flex mx-20'>
                    <img src={avatar1} />
                    <div className='mt-5 mx-5'>
                        <span className=" bg-white p-3 shadow-xl rounded-2xl">I can take care of your pitch</span>
                    </div>
                </div>
                <div className='flex mx-20'>
                    <div className='mt-5 mx-10 w-52'>
                        <span className=" bg-white p-3 shadow-xl rounded-2xl">I can prototype your app</span>
                    </div>
                    <img src={avatar3} />
                </div>
            </div>
            <div className='flex justify-center my-14 '>
                <div className='flex mx-20'>
                    <div className='mt-5 mx-5'>
                        <span className=" bg-white p-3 shadow-xl rounded-2xl">I can design you website</span>
                    </div>
                    <img src={avatar2} />
                </div>
                <div className='flex mx-20'>
                    <img src={avatar4} />
                    <div className='mt-5 mx-5'>
                    <span className=" bg-white p-3 shadow-xl rounded-2xl">I can help marketing strategy</span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <a href="#" className='text-white rounded-md bg-[#02897A] hover:bg-green-200  py-2 px-5 font-bold text-lg'>Contact our expert</a>
            </div>

        </div>
    )
}

export default Contact