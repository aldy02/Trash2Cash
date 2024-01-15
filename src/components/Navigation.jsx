import Logo from '../assets/Trash2CashLogo.png'
import ProfiileIcon from '../assets/ProfileIcon.svg'
import ArrowIcon from '../assets/ArrowIcon.svg'
import CartIcon from '../assets/CartIcon.svg'
import NotificationIcon from '../assets/NotificationIcon.svg'
import { Link } from "react-router-dom";
import HamburgerMenu from './HumbergerMenu'

const Navigation = () => {
    return (
        <div className=" navbar flex flex-row justify-between px-6 lg:px-8 py-2 border-b-2 border[#B0BEC5]">
            <div className='flex flex-row items-center'>
                <Link to='/'>
                    <div className="logo-container">
                        <img src={Logo} alt="Trash2Cash Logo" className='w-32 lg:w-44' />
                    </div>
                </Link>
                <span className="hidden lg:block lg:border-l-[3px] lg:h-8 lg:border-[#DEDEDE] lg:ml-5 lg:mr-6"></span>
                <div className="text-[#455A64] items-center hidden lg:flex lg:flex-row lg:font-medium lg:text-xl">
                    <Link to='/'><p className='hover:text-black'>Homepage</p></Link>
                    <Link to='/pickup'><p className='mx-4 hover:text-black'>Trash Pickup</p></Link>
                    <Link to='/product'><p className='hover:text-black'>Product</p></Link>
                </div>
            </div>
            <div className="profile flex flex-row items-center">
                <img className='w-5 lg:w-7' src={CartIcon} alt="Shopping Cart Icon" />
                <img src={NotificationIcon} alt="Notification Icon" className='w-5 ml-3 lg:w-7 lg:ml-5' />
                <span className="border-l-2 border-[#DEDEDE] h-6 mx-3 lg:mx-5 lg:border-l-[3px] lg:h-8"></span>
                <img className='w-6 lg:w-8' src={ProfiileIcon} alt="Profile Icon" />
                <img src={ArrowIcon} alt="Arrow Icon" className='ml-1 mr-2 w-4 lg:ml-2 lg:w-6' />
                <HamburgerMenu/>
            </div>
        </div>
    );
}

export default Navigation;
