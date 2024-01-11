import { useState } from 'react';
import GoogleIcon from '../assets/GoogleIcon.svg';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Box, Divider, AbsoluteCenter } from '@chakra-ui/react';
import AuthCard from '../components/AuthCard';
import AuthHero from '../components/AuthHero';
import InputField from '../components/InputField';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const registerUser = () => {
    alert('Submit form!');
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

  return (
    <>
      <div className="main-container flex h-screen  justify-center">
        <AuthHero />
        <AuthCard authType={'sign-up'}>
          <Button>
            <img src={GoogleIcon} alt="" />
            <span className="ml-3 text-neutral text-xs">
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
              mt={'4'}
              type="submit"
              bg="primary"
              textColor="white"
              _hover={{ bg: 'primary-dark' }}
              _active={{ bg: 'primary-dark' }}
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
