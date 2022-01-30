import React, {
  forwardRef, InputHTMLAttributes,
} from 'react';

import Input from './styles';

interface InputMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChangeValue: () => void;
}

const InputMask: React.ForwardRefRenderFunction<HTMLInputElement, InputMaskProps> = ({
  handleChangeValue, ...rest
}, ref) => (
  <Input
    ref={ref}
    onChange={handleChangeValue}
    {...rest}
  />
);
export default forwardRef(InputMask);
