import { useState } from 'react';
import VisibilityIcon from '../assets/VisibilityIcon.svg';
import VisibilityOffIcon from '../assets/VisibilityOffIcon.svg';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import AuthCard from '../components/AuthCard';
import AuthHero from '../components/AuthHero';

const Login = () => {
  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);
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

  const handleForm = (event) => {
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
            <FormControl
              isInvalid={formik.touched.email && formik.errors.email}
              id="email"
              mb="4"
            >
              <FormLabel>Email</FormLabel>
              <Input
                onChange={handleForm}
                type="email"
                name="email"
                focusBorderColor="secondary-light"
              />
              <FormErrorMessage fontSize={'xs'}>
                {formik.touched.email && formik.errors.email}
              </FormErrorMessage>
            </FormControl>

            {/* 🔐 INPUT PASSWORD */}
            <FormControl
              isInvalid={formik.touched.password && formik.errors.password}
              id="password"
              mb="4"
            >
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  onChange={handleForm}
                  pr="4.5rem"
                  name="password"
                  type={show ? 'text' : 'password'}
                />
                <InputRightElement width="4rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    background={'none'}
                    onClick={handleShowPassword}
                  >
                    {show ? (
                      <img src={VisibilityOffIcon} alt="hide" />
                    ) : (
                      <img src={VisibilityIcon} alt="show" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage fontSize="xs">
                {formik.touched.password && formik.errors.password}
              </FormErrorMessage>
            </FormControl>
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
