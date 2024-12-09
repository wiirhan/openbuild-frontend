import React, {forwardRef} from 'react';
import { useInput } from '@nextui-org/input';

const styles = {
  input: [ 'bg-transparent', 'placeholder:opacity-40', 'ml-1' ],
  innerWrapper: 'border border-gray-600 hover:border-gray h-12 text-sm px-3 rounded',
  inputWrapper: [ 'shadow-none' ],
};

const MyInput = forwardRef((props, ref) => {
  const {
    Component,
    startContent,
    getBaseProps,
    getInputProps,
    getInnerWrapperProps,
  } = useInput({
    ...props,
    ref,
    classNames: {
      ...styles,
    },
  });

  const innerWrapper = React.useMemo(() => {
    if (startContent) {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          <input {...getInputProps()} />
        </div>
      );
    }

    return <input {...getInputProps()} />;
  }, [startContent, getInputProps, getInnerWrapperProps]);

  return (
    <div >
      <Component {...getBaseProps()}>
        {innerWrapper}
      </Component>
    </div>
  );
});

MyInput.displayName = 'OBInput';

export default MyInput;