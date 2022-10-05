import icon from '../assets/amico.svg'
import iconWatch from '../assets/Triangle Copy 6.svg'

const Header = () => {
    return (
        <div className="container p-2">
            <div className='flex'>
                <div className="p-6">
                    <div className='flex items-center'>
                        <div className='mr-10 p-16'>
                            <p className='mb-7 font-bold text-5xl'>Work at the speed of thought</p>
                            <p className='mb-8'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                            <div className='flex'>
                                <div>
                                    <a href='#' className='mr-5 bg-[#02897A] text-white font-bold rounded-md p-3' type="submit">Get started</a>
                                </div>
                                <a href="#" className='flex items-center'>
                                    <img src={iconWatch} width={20} className='mr-2' />
                                    <p>Watch the Video</p>
                                </a>
                            </div>
                        </div>
                        <img src={icon} width={550} className='mr-3'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header