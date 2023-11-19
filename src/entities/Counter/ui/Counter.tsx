import { Button } from 'shared/ui/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';


export const Counter = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment())
  }
  const decrement = () => {
    dispatch(counterActions.decrement())
  }
  return (
    <div >
      <h1 data-testid="value-title">Значение = {value}</h1>
      <Button 
        onClick={increment}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button 
        onClick={decrement}
        data-testid="decriment-btn"
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
