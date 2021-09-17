import { memo, useCallback } from 'react';
import { Drink } from '../constants';

type FetchedDrinksProps = {
  drinks: Drink[];
  onAdd: (drink: Drink) => void;
};
export const FetchedDrinks = memo<FetchedDrinksProps>(({ drinks, onAdd }) => {
  return (
    <div>
      {drinks.map((item) => (
        <FetchedDrink key={item.idDrink} drink={item} onAdd={onAdd} />
      ))}
    </div>
  );
});
FetchedDrinks.displayName = nameof(FetchedDrinks);

type FetchedDrink = { drink: Drink } & Pick<FetchedDrinksProps, 'onAdd'>;
const FetchedDrink = memo<FetchedDrink>(({ onAdd, drink }) => {
  const handleAdd = useCallback(() => {
    onAdd(drink);
  }, [drink, onAdd]);

  return (
    <a style={{ display: 'block' }} href="#" onClick={handleAdd}>
      {drink.strDrink}
    </a>
  );
});
FetchedDrink.displayName = nameof(FetchedDrink);
