import { memo } from 'react';
import { FetchedDrinks, Input, SelectedDrinks } from '../components';
import { useFetchDrinks, useSelectedDrinks } from '../hooks';

export const Drinks = memo(() => {
  const { fetchedDrinks, setFetchedValue } = useFetchDrinks();
  const { selectedDrinks, addDrink, removeDrink } = useSelectedDrinks();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ background: '#ddd', margin: '20px' }}>
        <Input setFetchedValue={setFetchedValue} />
        <FetchedDrinks drinks={fetchedDrinks} onAdd={addDrink} />
      </div>
      <SelectedDrinks
        style={{ background: '#eee', margin: '20px' }}
        selectedDrinks={selectedDrinks}
        onRemove={removeDrink}
      />
    </div>
  );
});

Drinks.displayName = nameof(Drinks);
