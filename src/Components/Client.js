import rate from '../assets/rating.svg'
import avatar1 from '../assets/Ellipse 2.png'
import avatar2 from '../assets/Ellipse 2 (1).png'
import avatar3 from '../assets/Ellipse 2 (2).png'

const Client = () => {
    return (
        <div className='mb-20 mt-32'>
            <div className='text-center mb-14'>
                <p className='font-bold text-4xl mb-3'>What Clients Say</p>
                <p className='text-lg '>Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className='flex mx-28'>
                <div className='mr-10 p-8 outline outline-slate-200 rounded-lg'>
                    <img src={rate} />
                    <p>Product helps you see how many
                        more days you need to work to
                        reach your financial goal.</p>
                    <div className="flex items-center mt-3">
                        <img src={avatar1} className='mr-2' />
                        <div className="text-start">
                            <span className="font-bold text-xl text-[#02897A]">Wahid Ari</span>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>

                <div className=' mr-10 p-8 outline outline-slate-200 rounded-lg'>
                    <img src={rate} />
                    <p>Product helps you see how many
                        more days you need to work to
                        reach your financial goal.</p>
                    <div className="flex items-center mt-3">
                        <img src={avatar2} className='mr-2' />
                        <div className="text-start">
                            <span className="font-bold text-xl text-[#02897A]">Wahid Ari</span>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>

                <div className='p-8 outline-slate-200 rounded-lg outline'>
                    <img src={rate} />
                    <p>Product helps you see how many
                        more days you need to work to
                        reach your financial goal.</p>
                    <div className="flex items-center mt-3">
                        <img src={avatar3} className='mr-2' />
                        <div className="text-start">
                            <span className="font-bold text-xl text-[#02897A]">Wahid Ari</span>
                            <p>Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client