import { ChangeEventHandler, memo, useCallback, useState } from 'react';

type InputProps = {
  setFetchedValue: (value: string) => void;
};

export const Input = memo<InputProps>(({ setFetchedValue }) => {
  const [text, setText] = useState('');

  const fetchDrinks = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      const value = event.target.value;

      setFetchedValue(value);
      setText(value);
    },
    [setFetchedValue]
  );

  return <input onChange={fetchDrinks} value={text} />;
});
Input.displayName = nameof(Input);
