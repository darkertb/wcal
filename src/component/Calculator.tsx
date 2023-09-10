import { Card, FormControl, FormLabel, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useCalculatorStore } from '../store/calculator.store';
import { useAPIStore } from '../store/api.store';

import styles from './Calculator.module.scss';

export default function Calculator() {

  const ref = useRef(null);

  const inputHandler = useAPIStore((set) => set.inputHandler);
  const numberCalculator = useCalculatorStore((set) => set.numberCalculator);

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const execute = useCallback((inputText: string) => {

    try {
      const handledInputText = inputHandler.handle(inputText);
      const result: number = numberCalculator.calculate(handledInputText);
      setOutputText(result.toLocaleString());
      setIsError(false);
    }
    catch (error) {
      setIsError(true);
    }
  }, [inputHandler, numberCalculator]);

  useEffect(() => {
    execute(inputText);
  }, [execute, inputText]);

  const inputClassName = `${isError ? styles['calculate-error']: ''}`;

  return (
    <>
      <div className={styles['container']}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor='outlined-adornment-formula'>Formula</InputLabel>
          <OutlinedInput
            ref={ref}
            className={inputClassName}
            id='outlined-adornment-formula'
            startAdornment={<InputAdornment position='start'>ƒ</InputAdornment>}
            label='Formula'
            onChange={handleChange}
            autoFocus
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <FormLabel>Response</FormLabel>
          <Card className={styles['response-container']} variant='outlined'>{outputText}</Card>
        </FormControl>
      </div>
    </>
  );
}
