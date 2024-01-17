// eslint-disable-next-line react/prop-types
const AuthCard = ({ children, authType }) => {
  const isLogin = authType == 'sign-in';
  const authContent = {
    header: isLogin ? 'Sign In to Trash2Cash' : 'Create Account',
    subHeader: isLogin ? "Don't have an account?" : 'Already have an account?',
    nextUrl: isLogin ? 'sign-up' : 'sign-in',
    nextPage: isLogin ? 'Sign Up' : 'Sign In',
  };
  return (
    <div className="auth-container h-screen flex flex-col justify-center px-5">
      <div className="lg:px-8 px-6 py-4 flex flex-col justify-center content-center h-fit rounded-md shadow-md w-full border border-neutral-500">
        <h1 className="font-bold text-center lg:text-3xl text-2xl">{authContent.header}</h1>
        <div className="flex w-fit mx-auto mb-4 text-sm lg:text-base">
          <p className="text-center">{authContent.subHeader}</p>
          <a
            className="ml-2 text-[#65B741] font-medium"
            href={authContent.nextUrl}
          >
            {authContent.nextPage}
          </a>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
