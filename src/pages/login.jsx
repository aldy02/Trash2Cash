import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@chakra-ui/react';
import AuthCard from '../components/AuthCard';
import AuthHero from '../components/AuthHero';
import InputField from '../components/InputField';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const registerUser = () => {
    alert('Submit form!');
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

  return (
    <>
      <div className="main-container flex h-screen  justify-center">
        <AuthCard authType={'login'}>
          <form onSubmit={formik.handleSubmit}>
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
              type="submit"
              bg="primary"
              textColor="white"
              _hover={{ bg: 'primary-dark' }}
              _active={{ bg: 'primary-dark' }}
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

export default Login;
