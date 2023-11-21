
import { Currency } from 'entities/Currency/model/types/common';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';

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
    <ListBox
      className={className}
      value={value}
      defaultValue='Укажите валюту'
      label='Укажите валюту'
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  )

  // return (
  //   <Select 
  //     className={classNames('', {}, [className])}
  //     label={'Укажите валюту'}
  //     options={options}
  //     value={value}
  //     onChange={onChangeHandler}
  //     readonly={readonly}
  //   />
  // );
});
