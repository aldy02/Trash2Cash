import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import GoogleIcon from '../assets/GoogleIcon.svg';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Box, Divider, AbsoluteCenter } from '@chakra-ui/react';
import AuthCard from '../components/AuthCard';
import AuthHero from '../components/AuthHero';
import InputField from '../components/InputField';
import useSignIn from '../hooks/useSignIn';
import useAuthStatus from '../hooks/useAuthStatus';

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const { handleSignIn, error, success, loading } = useSignIn();
  const [isSignedIn] = useAuthStatus();

  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  const registerUser = (values) => {
    const { email, password } = values;
    handleSignIn(email, password);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
        title: 'Sign In Success',
        icon: 'success',
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/');
        }
      });
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: 'Wrong Email or Password, please Sign In again',
        icon: 'error',
      });
    }
  }, [error]);

  return (
    <>
      <div className="main-container flex h-screen justify-center">
        <AuthCard authType={'sign-in'}>
          <form onSubmit={formik.handleSubmit}>
            <Button w={'full'}>
              <img src={GoogleIcon} alt="" />
              <span className="ml-3 text-[#737373] text-xs">
                Sign In With Google
              </span>
            </Button>
            <Box position="relative" py="5">
              <Divider />
              <AbsoluteCenter fontSize={'xs'} bg="white">
                Or Sign In With
              </AbsoluteCenter>
            </Box>
            {/* 📧 INPUT EMAIL */}
            <InputField
              type={'email'}
              label={'email'}
              name={'email'}
              onChange={handleInputOnChange}
              error={formik.touched.email && formik.errors.email}
              placeholder={'example@mail.com'}
            />
            {/* 🔐 INPUT PASSWORD */}
            <InputField
              type={'password'}
              label={'password'}
              name={'password'}
              onChange={handleInputOnChange}
              error={formik.touched.password && formik.errors.password}
              showPassword={showPassword}
              onShowPassword={handleShowPassword}
            />
            <Button
              isLoading={loading}
              type="submit"
              bg="#FFB534"
              mt={8}
              textColor="white"
              _hover={{ bg: '#F89F04' }}
              _active={{ bg: '#F89F04k' }}
              w={'full'}
            >
              Sign In
            </Button>
          </form>
        </AuthCard>
        <AuthHero />
      </div>
    </>
  );
};

export default SignIn;
