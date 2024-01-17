import Logo from '../assets/Trash2CashLogo.png';
import Hero from '../assets/HeroImage.svg';

const AuthHero = () => {
  return (
    <>
      <div className="mx-4 hidden lg:flex auth-hero-container flex-col content-center justify-center ">
        <img src={Logo} alt="Trash2Cash Logo" className="w-40 mx-auto" />
        <img src={Hero} alt="Trash2Cash Hero" className="w-[450px]" />
      </div>
    </>
  );
};

export default AuthHero;
