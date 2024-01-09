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
                    <img src={Logo} alt="Trash2Cash Logo" className='w-56' />
                </div>
                <span className="border-l-[3px] h-12 border-[#DEDEDE] ml-5 mr-6"></span>
                <div className="item-menu font-medium text-2xl flex flex-row items-center text-[#455A64]">
                    <p>Homapage</p>
                    <p className='mx-4'>Trash Pickup</p>
                    <p>Product</p>
                </div>
            </div>
            <div className="profile flex flex-row items-center">
                <img src={CartIcon} alt="Shopping Cart Icon" />
                <img src={NotificationIcon} alt="Notification Icon" className='ml-5' />
                <span className="border-l-[3px] h-12 border-[#DEDEDE] mx-5"></span>
                <img src={ProfiileIcon} alt="Profile Icon" />
                <img src={ArrowIcon} alt="Arrow Icon" className='ml-5' />
            </div>
        </div>
    );
}

export default Navigation;
