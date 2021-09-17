import { CSSProperties, memo, useCallback } from 'react';
import { Drink, SelectedDrinks as Drinks } from '../constants';

type SelectedDrinksProps = {
  style: CSSProperties;
  selectedDrinks: Drinks;
  onRemove: (value: Drink['idDrink']) => void;
};

export const SelectedDrinks = memo<SelectedDrinksProps>(
  ({ style, selectedDrinks, onRemove }) => (
    <div style={style}>
      {Object.entries(selectedDrinks).map((item) => (
        <SelectedDrink
          key={item[0]}
          strDrink={item[1]}
          idDrink={item[0]}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
);
SelectedDrinks.displayName = nameof(SelectedDrinks);

type SelectedDrinkProps = Drink & Pick<SelectedDrinksProps, 'onRemove'>;

const SelectedDrink = memo<SelectedDrinkProps>(
  ({ idDrink, strDrink, onRemove }) => {
    const handleRemove = useCallback(() => onRemove(idDrink), [
      idDrink,
      onRemove
    ]);

    return (
      <div key={idDrink}>
        {strDrink}
        <button onClick={handleRemove}>Х</button>
      </div>
    );
  }
);
SelectedDrink.displayName = nameof(SelectedDrink);
