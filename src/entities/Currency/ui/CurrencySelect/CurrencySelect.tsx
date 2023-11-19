import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './CurrencySelect.module.scss';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/common';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
        {value: Currency.RUB, content: Currency.RUB},
        {value: Currency.EUR, content: Currency.EUR},
        {value: Currency.USD, content: Currency.USD}
      ]

export const CurrencySelect = memo(({className, value, onChange, readonly}: CurrencySelectProps) => {
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange]);

  return (
    <Select 
      className={classNames('', {}, [className])}
      label={'Укажите валюту'}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
