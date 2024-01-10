// eslint-disable-next-line react/prop-types
const AuthCard = ({ children, authType }) => {
  const isLogin = authType === 'login';
  const authContent = {
    header: isLogin ? 'Sign In to Trash2Cash' : 'Create Account',
    subHeader: isLogin ? "Don't have an account?" : 'Already have an account?',
    nextUrl: isLogin ? 'signup' : 'login',
    nextPage: isLogin ? 'Sign Up' : 'Sign In',
  };
  return (
    <div className="auth-container h-screen flex flex-col justify-center">
      <div className="p-8 flex flex-col justify-center content-center h-fit rounded-md shadow-md w-96 border border-neutral-500">
        <h1 className="font-bold text-center text-3xl">{authContent.header}</h1>
        <div className="flex w-fit mx-auto mb-8">
          <p className="text-center">{authContent.subHeader}</p>
          <a
            className="ml-2 text-secondary-dark font-medium"
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
