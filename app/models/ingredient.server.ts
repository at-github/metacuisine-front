type Ingredient = {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  price: number;
  unit: string;
  origin_animal: any;
  average_weight: any;
}

export async function getIngredients(): Promise<Array<Ingredient>> {
  const res = await fetch('https://api.metacuisine.fr/v1/ingredients')

  return res.json()
}
