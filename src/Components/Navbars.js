import logo from '../assets/logo.svg'
import icon from "../assets/Frame 49.svg"

const Navbars = () => {
    return (
        <nav className='w-full flex justify-between items-center py-2'>
            <a href="#" className='ml-24'>
                <img src={logo} alt="" />
            </a>
            <ul className="sm:flex items-center justify-end">
                <li className='mr-5'>
                    <a href="#" className='font-bold'>Product</a>
                </li>
                <li className='mr-10'>
                    <a href="#">Customers</a>
                </li>
                <li className='mr-10'>
                    <a href="#">Princing</a>
                </li>
                <li className='mr-10'>
                    <a href="#">Resource</a>
                </li>
                <a href='#' type="submit" className='outline outline-gray-200 p-2 px-5 rounded-md hover:bg-[#02897A] font-bold'>Sign In</a>
                <a href='#' className='bg-[#02897A] p-2 px-5 text-white m-3 rounded-md font-bold' type="submit">Sign Up</a>
                <a href="#"><img src={icon} alt="" width="32" height="32" /></a>
            </ul>
        </nav>

    )
}

export default Navbars