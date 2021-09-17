import { useEffect, useState } from 'react';
import { Drink, fetchUrl } from '../constants';

export const useFetchDrinks = () => {
  const [fetchedDrinks, setFetchedDrinks] = useState<Drink[]>([]);
  const [fetchedvalue, setFetchedValue] = useState('');

  useEffect(() => {
    const fetchFn = async () => {
      const response = await fetch(fetchUrl + fetchedvalue)
        .then((response) => response.json())
        .then((response) => setFetchedDrinks(response.drinks))
        .catch((error) => console.error(error));

      return response;
    };

    fetchFn();
  }, [fetchedvalue]);

  return { fetchedDrinks, setFetchedValue };
};
