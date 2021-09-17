export type Drink = {
  idDrink: string;
  strDrink: string;
};

export type SelectedDrinks = Record<Drink['idDrink'], Drink['strDrink']>;
