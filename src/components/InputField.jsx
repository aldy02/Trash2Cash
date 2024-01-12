/* eslint-disable react/prop-types */
import VisibilityIcon from '../assets/VisibilityIcon.svg';
import VisibilityOffIcon from '../assets/VisibilityOffIcon.svg';
import _ from 'lodash';
import {
  FormControl,
  Input,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

const InputField = ({
  type,
  label,
  name,
  value,
  onChange,
  error,
  onShowPassword,
  showPassword,
  placeholder,
}) => {
  return (
    <FormControl isInvalid={error} mb="2">
      <FormLabel>
        {_.words(label || type)
          .map(_.capitalize)
          .join(' ')}
      </FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          onChange={onChange}
          type={type == 'password' ? (showPassword ? 'text' : 'password') : type}
          name={name || type}
          focusBorderColor="#d4d4d4"
          value={value}
          placeholder={placeholder || type}
        />
        {type == 'password' ? (
          <InputRightElement width="4rem">
            <Button
              h="1.75rem"
              size="sm"
              background={'none'}
              onClick={onShowPassword}
            >
              {showPassword ? (
                <img src={VisibilityOffIcon} alt="hide" />
              ) : (
                <img src={VisibilityIcon} alt="show" />
              )}
            </Button>
          </InputRightElement>
        ) : (
          ''
        )}
      </InputGroup>
      <FormErrorMessage fontSize={'xs'}>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default InputField;
