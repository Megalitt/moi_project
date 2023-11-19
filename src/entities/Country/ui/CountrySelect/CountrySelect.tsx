import { classNames } from 'shared/lib/classNames/classNames';
// import cls from './CurrencySelect.module.scss';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entities/Country/model/types/country';
import { memo, useCallback } from 'react';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
        {value: Country.Russia, content: Country.Russia},
        {value: Country.Armenia, content: Country.Armenia},
        {value: Country.Belarus, content: Country.Belarus},
        {value: Country.Kazakhstan, content: Country.Kazakhstan}
      ]

export const CountrySelect = memo(({className, value, onChange, readonly}: CountrySelectProps) => {
  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange]);

  return (
    <Select 
      className={classNames('', {}, [className])}
      label={'Укажите страну'}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
