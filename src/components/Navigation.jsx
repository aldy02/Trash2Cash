import Logo from '../assets/Trash2CashLogo.png'
import ProfiileIcon from '../assets/ProfileIcon.svg'
import ArrowIcon from '../assets/ArrowIcon.svg'
import CartIcon from '../assets/CartIcon.svg'
import NotificationIcon from '../assets/NotificationIcon.svg'

const Navigation = () => {
    return (
        <div className="navbar flex flex-row justify-between px-8 py-2 border-b-2 border[#B0BEC5]">
            <div className='flex flex-row items-center'>
                <div className="logo-container">
                    <img src={Logo} alt="Trash2Cash Logo" className='w-44' />
                </div>
                <span className="border-l-[3px] h-8 border-[#DEDEDE] ml-5 mr-6"></span>
                <div className="item-menu font-medium text-xl flex flex-row items-center text-[#455A64]">
                    <p>Homapage</p>
                    <p className='mx-4'>Trash Pickup</p>
                    <p>Product</p>
                </div>
            </div>
            <div className="profile flex flex-row items-center">
                <img className='w-7' src={CartIcon} alt="Shopping Cart Icon" />
                <img src={NotificationIcon} alt="Notification Icon" className='ml-5 w-7' />
                <span className="border-l-[3px] h-8 border-[#DEDEDE] mx-5"></span>
                <img className='w-8' src={ProfiileIcon} alt="Profile Icon" />
                <img src={ArrowIcon} alt="Arrow Icon" className='ml-2 w-6' />
            </div>
        </div>
    );
}

export default Navigation;
