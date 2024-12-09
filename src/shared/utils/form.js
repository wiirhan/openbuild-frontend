// for `useForm()` from `'react-hook-form'`
function wrapOnChange(onChange) {
  return async (event) => {
    const target = event.target;

    if (typeof target.value === 'string' && target.value) {
      target.value = target.value.trim();
    }

    return onChange(event);
  }
}

export { wrapOnChange }
