import screen from '../assets/screen.png'
import logo from '../assets/logo.svg'
import iconIg from '../assets/ig.svg'
import iconFb from '../assets/fb.svg'
import iconTwt from '../assets/twt.svg'

const Footer = () => {
    return (
        <div className='mb-14'>
            <div className="flex bg-[#02897A] mx-24 items-center px-4 rounded-xl">
                <div className='m-16'>
                    <p className='text-white font-bold text-4xl mb-24'>Join 100 Compannies who boost their business with Product</p>
                    <a href="#" className='bg-white rounded-md text-[#02897A] hover:bg-green-200  py-2 px-5 font-bold text-xl'>Get This</a>
                </div>
                <img src={screen} width={450} />
            </div>

            <div className='flex mx-20 mt-24'>
                <div className='mr-36'>
                    <img src={logo} />
                    <div className='flex mt-5 space-x-5'>
                        <img src={iconIg} />
                        <img src={iconFb} />
                        <img src={iconTwt} />
                    </div>
                </div>
                <div className='mr-36 space-y-2'>
                    <p className='font-bold text-gray-700 text-xl'>Resource</p>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Contact</p>
                    <p>FAQ</p>
                </div>
                <div className='mr-28 space-y-2'>
                    <p className='font-bold text-gray-700 text-xl'>Legal Stuff</p>
                    <p>Disclaimer</p>
                    <p>Financing</p>
                    <p>Privacy Police</p>
                    <p>Terms of Service</p>
                </div>
                <div>
                    <p className='font-bold text-gray-700 text-xl'>Knowing you're always on <br /> the best energy deal.</p>
                    <input className='shadow-2xl outline outline-slate-200 my-8 rounded-sm h-10 w-72' /><br />
                    <a href="#" className='text-white rounded-md bg-[#02897A] hover:bg-green-200  py-2 px-5 font-bold text-lg'>Sign Up Now</a>
                </div>
            </div>
            <p className='text-center mt-14 text-lg'>Made With Love By Figmaland All Right Reserved</p>
        </div>
    )
}

export default Footer