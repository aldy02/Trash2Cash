import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../assets/GoogleIcon.svg';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import * as yup from 'yup';
import { Button, Box, Divider, AbsoluteCenter } from '@chakra-ui/react';
import AuthCard from '../components/AuthCard';
import AuthHero from '../components/AuthHero';
import InputField from '../components/InputField';
import useSignUp from '../hooks/useSignUp';
import useAuthStatus from '../hooks/useAuthStatus';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const { handleSignUp, error, success, loading } = useSignUp();
  const [isSignedIn] = useAuthStatus();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  const registerUser = (values) => {
    const { email, password } = values;
    handleSignUp(email, password);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required('email is required')
        .email('does not match the email format'),
      password: yup
        .string()
        .required()
        .matches(
          // eslint-disable-next-line no-useless-escape
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'Passwords must contain uppercase letters, lowercase letters, numbers and special characters',
        ),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password must match')
        .required()
        .matches(
          // eslint-disable-next-line no-useless-escape
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          'Passwords must contain uppercase letters, lowercase letters, numbers and special characters',
        ),
    }),
  });

  const handleInputOnChange = (event) => {
    const { target } = event;
    formik.setFieldValue(target.name, target.value);
    formik.setFieldTouched(target.name, true, false);
  };

  useEffect(() => {
    if (success) {
      Swal.fire({
        title: 'Your account has been created, please sign in',
        icon: 'success',
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/sign-in');
        }
      });
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: error.message,
        icon: 'error',
      });
    }
  }, [error]);

  return (
    <>
      <div className="main-container flex h-screen  justify-center">
        <AuthHero />
        <AuthCard authType={'sign-up'}>
          <Button>
            <img src={GoogleIcon} alt="" />
            <span className="ml-3 text-[#737373] text-xs">
              Sign Up With Google
            </span>
          </Button>
          <Box position="relative" py="5">
            <Divider />
            <AbsoluteCenter fontSize={'xs'} bg="white">
              Or Create Account With
            </AbsoluteCenter>
          </Box>
          <form onSubmit={formik.handleSubmit}>
            {/* 📧 INPUT EMAIL */}
            <InputField
              type={'email'}
              onChange={handleInputOnChange}
              error={formik.touched.email && formik.errors.email}
              placeholder={'example@mail.com'}
            />
            {/* 🔐 INPUT PASSWORD */}
            <InputField
              type={'password'}
              onChange={handleInputOnChange}
              error={formik.touched.password && formik.errors.password}
              showPassword={showPassword}
              onShowPassword={handleShowPassword}
            />

            {/* 🔐 INPUT CONFIRM PASSWORD */}
            <InputField
              type={'password'}
              label={'confirm-password'}
              name={'confirmPassword'}
              onChange={handleInputOnChange}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              showPassword={showConfirmPassword}
              onShowPassword={handleShowConfirmPassword}
            />
            <Button
              isLoading={loading}
              mt={'4'}
              type="submit"
              bg="#FFB534"
              textColor="white"
              _hover={{ bg: '#F89F04' }}
              _active={{ bg: '#F89F04' }}
              w={'full'}
            >
              Sign Up
            </Button>
          </form>
        </AuthCard>
      </div>
    </>
  );
};

export default SignUp;
