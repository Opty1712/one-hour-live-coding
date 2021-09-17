import { useCallback, useState } from 'react';
import { Drink, SelectedDrinks } from '../constants';

export const useSelectedDrinks = () => {
  const [selectedDrinks, setSelectedDrinks] = useState<SelectedDrinks>({});

  const addDrink = useCallback((drink: Drink) => {
    setSelectedDrinks((value) => ({
      ...value,
      [drink.idDrink]: drink.strDrink
    }));
  }, []);

  const removeDrink = useCallback((idDrink: Drink['idDrink']) => {
    setSelectedDrinks((value) => {
      const newValue = { ...value };
      delete newValue[idDrink];

      return newValue;
    });
  }, []);

  return { selectedDrinks, addDrink, removeDrink };
};
